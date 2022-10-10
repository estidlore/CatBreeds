import type { IImageData } from "./imageData";

type TScale = 1 | 2 | 3 | 4 | 5;

interface IBreedWeight {
  imperial: string;
  metric: string;
}

interface IBreedBasicData {
  description: string;
  id: string;
  image?: IImageData;
  intelligence: TScale;
  name: string;
  origin: string;
}

interface IBreedExtraData {
  altNames?: string;
  bidability?: TScale;
  catFriendly?: TScale;
  cfaUrl?: string;
  lap?: boolean;
  vcaHospitalsUrl?: string;
  referenceImageId?: string;
  vetStreetUrl?: string;
  wikipediaUrl?: string;
}

interface IBreed extends IBreedBasicData, IBreedExtraData {
  adaptability: TScale;
  affectionLevel: TScale;
  childFriendly: TScale;
  countryCode: string;
  countryCodes: string;
  dogFriendly: TScale;
  energyLevel: TScale;
  experimental: boolean;
  grooming: TScale;
  hairless: boolean;
  healthIssues: TScale;
  hypoallergenic: boolean;
  indoor: boolean;
  lifeSpan: string;
  natural: boolean;
  rare: boolean;
  rex: boolean;
  sheddingLevel: TScale;
  socialNeeds: TScale;
  shortLegs: boolean;
  strangerFriendly: TScale;
  suppressedTail: boolean;
  temperament: string;
  vocalisation: TScale;
  weight: IBreedWeight;
}

export type { IBreed, IBreedBasicData, IBreedExtraData, IBreedWeight, TScale };
