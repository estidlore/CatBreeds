import { Cat, CatApi, CatImage } from 'models/Cat';

import apiConfig from './api.config.json';

const formatCat = async (cat: CatApi): Promise<Cat> => {
  const image = await getCatImage(cat);
  return {
    affectionLevel: cat.affection_level,
    breedName: cat.name,
    id: cat.id,
    image,
    intelligence: cat.intelligence,
    origin: cat.origin,
  };
};

const getCats = async (): Promise<Cat[]> => {
  const CATS_SAMPLE = 30;
  const res = await fetch(apiConfig.url, { headers: apiConfig.headers });
  const data: CatApi[] = await res.json();

  const catApis = data
    .slice(0, CATS_SAMPLE)
    .filter((el) => el.reference_image_id !== undefined);
  return await Promise.all(catApis.map(formatCat));
};

const getCatImage = async (cat: CatApi): Promise<CatImage> => {
  const imgRes = await fetch(
    `https://api.thecatapi.com/v1/images/${cat.reference_image_id}`,
    { headers: apiConfig.headers },
  );
  const { breeds, ...image } = await imgRes.json();
  return image;
};

export { getCats };
