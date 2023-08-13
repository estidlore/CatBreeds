interface Cat {
  affectionLevel: number;
  breedName: string;
  id: string;
  image: CatImage;
  intelligence: number;
  origin: string;
}

interface CatImage {
  height: number;
  id: string;
  url: string;
  width: number;
}

interface CatApi {
  affection_level: number;
  id: string;
  intelligence: number;
  name: string;
  origin: string;
  reference_image_id: string;
}

export type { Cat, CatApi, CatImage };
