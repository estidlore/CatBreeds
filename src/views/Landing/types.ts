import type { IBreed } from "types/breed";

interface IBreedCardProps
  extends Pick<IBreed, "image" | "intelligence" | "name" | "origin"> {
  onPress: () => void;
}

export type { IBreedCardProps };
