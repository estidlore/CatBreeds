import type { IBreed, IBreedExtraData } from "types/breed";

interface IDetailsProps {
  breed: IBreed;
}

interface IExtraDetailsProps {
  breed: IBreedExtraData;
}

export type { IDetailsProps, IExtraDetailsProps };
