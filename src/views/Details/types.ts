import type { IBreed } from "types/breed";

interface IDetailsProps {
  breed: IBreed;
}

interface IExtraDetailsProps {
  breed: Pick<
    IBreed, "altNames" |
    "bidability" |
    "cfaUrl" |
    "lap" |
    "referenceImageId" |
    "vcaHospitalsUrl" |
    "vetStreetUrl" |
    "wikipediaUrl"
  >;
}

export type { IDetailsProps, IExtraDetailsProps };
