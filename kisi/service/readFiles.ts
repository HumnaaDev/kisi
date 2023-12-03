const fs = require("fs");
import path from "path";
import article from "../data/articles.json";
import { associateImagesWithArticle } from "../utils/associateImagesWithArticle";

const directoryPath = path.join(process.cwd(), "pages/api/DB/images");

export const getFiles = async () => {
  try {
    const files = fs.readdirSync(directoryPath);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    const imageBase64Map = {};

    imageFiles.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, { encoding: 'base64' });
      imageBase64Map[file] = fileContent;
    });

    const associatedData = associateImagesWithArticle(imageBase64Map, article);
    return associatedData
  } catch (error) {
    console.error('Error reading directory:', error.message);
    return null;
  }
};
