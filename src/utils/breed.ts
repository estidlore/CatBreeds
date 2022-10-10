import type { IBreed, IBreedWeight, TScale } from "types/breed";
import type { IImageData } from "types/imageData";

const format = (obj: Record<string, unknown>): IBreed => ({
  adaptability: obj["adaptability"] as TScale,
  affectionLevel: obj["affection_level"] as TScale,
  childFriendly: obj["child_friendly"] as TScale,
  countryCode: obj["country_code"] as string,
  countryCodes: obj["country_codes"] as string,
  dogFriendly: obj["dog_friendly"] as TScale,
  energyLevel: obj["energy_level"] as TScale,
  experimental: obj["experimental"] as boolean,
  grooming: obj["grooming"] as TScale,
  hairless: obj["hairless"] as boolean,
  healthIssues: obj["health_issues"] as TScale,
  hypoallergenic: obj["hypoallergenic"] as boolean,
  indoor: obj["indoor"] as boolean,
  lifeSpan: obj["life_span"] as string,
  natural: obj["natural"] as boolean,
  rare: obj["rare"] as boolean,
  rex: obj["rex"] as boolean,
  sheddingLevel: obj["shedding_level"] as TScale,
  shortLegs: obj["short_legs"] as boolean,
  socialNeeds: obj["social_needs"] as TScale,
  strangerFriendly: obj["stranger_friendly"] as TScale,
  suppressedTail: obj["suppressed_tail"] as boolean,
  temperament: obj["temperament"] as string,
  vocalisation: obj["vocalisation"] as TScale,
  weight: obj["weight"] as IBreedWeight,
  /* Basic data */
  description: obj["description"] as string,
  id: obj["id"] as string,
  image: obj["image"] as (IImageData | undefined),
  intelligence: obj["intelligence"] as TScale,
  name: obj["name"] as string,
  origin: obj["origin"] as string,
  /* Extra data */
  altNames: obj["alt_names"] as (string | undefined),
  bidability: obj["bidability"] as (TScale | undefined),
  catFriendly: obj["cat_friendly"] as (TScale | undefined),
  cfaUrl: obj["cfa_url"] as (string | undefined),
  lap: obj["lap"] as (boolean | undefined),
  referenceImageId: obj["reference_image_id"] as (string | undefined),
  vcaHospitalsUrl: obj["vcahospitals_url"] as (string | undefined),
  vetStreetUrl: obj["vetstreet_url"] as (string | undefined),
  wikipediaUrl: obj["wikipedia_url"] as (string | undefined),
});

export { format };
