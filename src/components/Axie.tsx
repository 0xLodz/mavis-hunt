import type { StarterId, StarterName } from "lib/starterAxies";
import { isStarterAxie, starterAxiesMap } from "lib/starterAxies";
import ImageWithFallback from "./ImageWithFallback";
// import RuneComponent from "./Rune";
// import CharmComponent from "./Charm";
import type { AxieType } from "lib/validators";

interface AxieProps {
  axieId: number;
  axieType: AxieType;
  width: number;
  heigth: number;
}
export function Axie({ axieId, axieType, width, heigth }: AxieProps) {
  if (isStarterAxie(axieType)) {
    return (
      <div className="relative mb-10 sm:mb-0">
        <ImageWithFallback
          width={width}
          height={heigth * 0.58}
          src={`/starters/${
            starterAxiesMap.get(axieId as StarterId) as StarterName
          }.png`}
          priority
          fallbackSrc="/placeholder.png"
        />
      </div>
    );
  }
  return (
    <div key={axieId} className="relative mb-10 sm:mb-0">
      <a
        href={`https://app.axieinfinity.com/marketplace/axies/${axieId}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageWithFallback
          width={width}
          height={heigth}
          src={`https://axiecdn.axieinfinity.com/axies/${axieId}/axie/axie-full-transparent.png`}
          fallbackSrc={`https://assets.axieinfinity.com/axies/${axieId}/axie/axie-full-transparent.png`} // v2 assets
          priority
        />
      </a>
    </div>
  );
}
