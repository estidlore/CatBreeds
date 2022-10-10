import type { IBreedBasicData } from "types/breed";

interface IBreedCardProps extends Omit<IBreedBasicData, "description" | "id"> {
  onPress: () => void;
}

export type { IBreedCardProps };
