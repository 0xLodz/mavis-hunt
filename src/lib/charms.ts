import type { Item } from "lib/validators";

export type Charm = Item["item"];
export type CharmGameId = string;
export type ImageName = string;

export function getCharmDataFromCharmGameID(
  charmGameId: CharmGameId,
  charms: Charm[]
): Charm | null {
  if (!charmGameId) return null;

  const charm =
    charms.find((charm) => {
      return charm.id.startsWith(charmGameId);
    }) ?? null;
  return charm;
}
