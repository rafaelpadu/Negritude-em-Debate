import Image, { ImageInput, ImageOutput } from "../models/Image";

export const create = async (payload: ImageInput): Promise<ImageOutput> => {
  console.log(payload);
  const image = await Image.create(payload);
  return image;
};
