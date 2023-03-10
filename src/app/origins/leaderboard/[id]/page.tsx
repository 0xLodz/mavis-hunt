import Bottleneck from "bottleneck";
import type { Battle, Battles, User } from "lib/validators";
import { getBattles, getCharms, getLeaderBoard, getRunes } from "lib/api";
import { createPlayer } from "lib/createPlayer";
import {
  LEADERBOARD_LIMIT,
  LEADERBOARD_PLAYER_BATTLES,
  X_RATE_LIMIT_PER_SEC,
} from "lib/consts";
import { Suspense } from "react";
import chunk from "lib/chunk";
import { Header } from "components/Header";
import OriginPlayer from "components/OriginPlayer";
import type { Rune } from "lib/runes";
import type { Charm } from "lib/charms";
import { PlayerListSkeleton } from "components/PlayerListSkeleton";
import type { Metadata } from "next";

interface OriginsLeaderboardPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({
  params,
}: OriginsLeaderboardPageProps): Metadata {
  const pageID = Number(params.id);
  return {
    title: `Top ${pageID * LEADERBOARD_LIMIT} | Origins leaderboard`,
    description: `Top ${pageID * LEADERBOARD_LIMIT} | Origins leaderboard`,
  };
}

export default async function OriginsLeaderboardPage({
  params,
}: OriginsLeaderboardPageProps) {
  const pageID = Number(params.id);
  const offset = pageID * LEADERBOARD_LIMIT - LEADERBOARD_LIMIT;
  const { runes, charms, users, usersBattlesPromises } = await getData({
    offset,
  });

  if (!runes || !charms || !users) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-lg font-bold sm:text-2xl">
          Ooops! Error when retrieving data, please refresh the page!
        </p>
      </div>
    );
  }

  return (
    <>
      <Header pageID={pageID} />
      <div className="flex max-w-full flex-col items-center overflow-hidden">
        {chunk(usersBattlesPromises, X_RATE_LIMIT_PER_SEC).map(
          (promises, index) => {
            return (
              <Suspense
                fallback={
                  <PlayerListSkeleton playersQuantity={promises.length} />
                }
                key={index}
              >
                {/* @ts-expect-error Server Component*/}
                <PlayerList
                  userBattlesPromises={promises}
                  users={users.slice(
                    index * X_RATE_LIMIT_PER_SEC,
                    (index + 1) * X_RATE_LIMIT_PER_SEC
                  )}
                  runes={runes}
                  charms={charms}
                />
              </Suspense>
            );
          }
        )}
      </div>
    </>
  );
}

interface PlayerListProps {
  userBattlesPromises: Promise<Battles | undefined>[];
  users: User[];
  runes: Rune[];
  charms: Charm[];
}

async function PlayerList({
  userBattlesPromises,
  users,
  runes,
  charms,
}: PlayerListProps) {
  const userBattles = (await Promise.all(userBattlesPromises)).map(
    (battles) => battles?.battles ?? []
  );

  const players = users.map((user, index) => {
    return createPlayer({
      battles: userBattles[index] as Battle[],
      user,
      runes,
      charms,
    });
  });
  return (
    <>
      {players.map((_player) => (
        <OriginPlayer
          key={_player.userID}
          player={_player}
          runes={runes}
          charms={charms}
        />
      ))}
    </>
  );
}

async function getData({ offset }: { offset: number }) {
  const [runesResponse, charmsResponse, usersResponse] = await Promise.all([
    getRunes(),
    getCharms(),
    getLeaderBoard({ offset, limit: LEADERBOARD_LIMIT }),
  ]);
  const runes = runesResponse?._items.map((el) => el.item);
  const charms = charmsResponse?._items.map((el) => el.item);
  const users = usersResponse?._items;

  // limit the number of requests to the API to 10 per second
  const limiter = new Bottleneck({
    minTime: 1000 / X_RATE_LIMIT_PER_SEC + 10 * X_RATE_LIMIT_PER_SEC, // add 10ms per request to safely avoid to reach rate limit
    maxConcurrent: X_RATE_LIMIT_PER_SEC,
  });
  const wrappedGetBattles = limiter.wrap(getBattles);
  const usersBattlesPromises = (users ?? []).map(({ userID }) =>
    wrappedGetBattles({ userID, limit: LEADERBOARD_PLAYER_BATTLES })
  );

  return {
    runes,
    charms,
    users,
    usersBattlesPromises,
  };
}
