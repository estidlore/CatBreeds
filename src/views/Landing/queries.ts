import { api, key } from "apiInfo.json";

type ApiBreeds = Promise<Record<string, unknown>[]>;

const getBreeds = async (): ApiBreeds => {
  return fetch(api, {
    method: "GET",
    credentials: "include",
    headers: {
      "x-api-key": key,
    },
  })
    .then(async res => res.json())
    .catch((err) => {
      console.log("getBreeds fetch error:", err);
    }) as ApiBreeds;
};

export { getBreeds };
