const fs = require("fs");
import path from "path";

const directoryPath = path.join(process.cwd(), "public/DB/images");

export const getFiles = async () => {
  const files = await new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error("Error reading directory:", err);
        reject();
        return;
      }

      resolve(
        files.map((file, index) => {
          console.log(`${index + 1}. ${file}`);
          return file;
        }),
      );
    });
  });
  return files;
};
