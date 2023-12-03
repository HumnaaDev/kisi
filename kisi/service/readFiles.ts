const fs = require("fs");
import path from "path";
import article from "../data/articles.json";
import { associateImagesWithArticle } from "../utils/associateImagesWithArticle";
import { ICatalog } from "../types/catalog";

const directoryPath = path.join(process.cwd(), "public/DB/images");

export const getFiles = async (): Promise<ICatalog[]> => {
  const files = await new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error("Error reading directory:", err);
        reject();
        return;
      }

      resolve(
        files.map((file, index) => {
          console.log(`${index + 1}.${file}`);
          return file;
        }),
      );
    });
  });

  //associate images to articles
  const data = associateImagesWithArticle(files, article);
  return data;
};
