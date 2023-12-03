import { ICatalog } from "../types/catalog";

export const associateImagesWithArticle = (base64, article): ICatalog[] => {
  const images = Object.values(base64)

  const data = [];
  for (let index = 0; index < images.length; index++) {
    data.push({
      title: article[index].title,
      description: article[index].description,
      image: images[index],
    });
  }
  return data;
};
