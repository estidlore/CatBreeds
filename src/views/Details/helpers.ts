import type { TScale } from "types/breed";

const boolMap = (val: boolean): string => val ? "Sí" : "No";
const scaleMap = (val: TScale): string => `${val} / 5`;

export { boolMap, scaleMap };
