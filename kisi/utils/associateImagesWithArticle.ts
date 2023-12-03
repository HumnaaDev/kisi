export const associateImagesWithArticle = (images, article) => {
  const data = [];
  for (let index = 0; index < images.length; index++) {
    data.push({
      title: article[index].title,
      description: article[index].description,
      image: `DB/images/${images[index]}`,
    });
  }
  return data;
};
