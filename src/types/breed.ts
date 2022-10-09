import type { IImageData } from "./imageData";

type TScale = 1 | 2 | 3 | 4 | 5;

interface IBreedWeight {
  imperial: string;
  metric: string;
}

interface IBreed {
  adaptability: TScale;
  affectionLevel: TScale;
  altNames?: string;
  cfaUrl?: string;
  childFriendly: TScale;
  countryCode: string;
  countryCodes: string;
  description: string;
  dogFriendly: TScale;
  energyLevel: TScale;
  experimental: boolean;
  grooming: TScale;
  hairless: boolean;
  healthIssues: TScale;
  hypoallergenic: boolean;
  id: string;
  image?: IImageData;
  indoor: boolean;
  intelligence: TScale;
  lap?: boolean;
  lifeSpan: string;
  name: string;
  natural: boolean;
  origin: string;
  rare: boolean;
  referenceImageId?: string;
  rex: boolean;
  sheddingLevel: TScale;
  socialNeeds: TScale;
  shortLegs: boolean;
  strangerFriendly: TScale;
  suppressedTail: boolean;
  temperament: string;
  vcaHospitalsUrl?: string;
  vetStreetUrl?: string;
  vocalisation: TScale;
  weight: IBreedWeight;
  wikipediaUrl?: string;
}

export type { IBreed };
