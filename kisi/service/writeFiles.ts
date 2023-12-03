import fs from "fs";
import path from "path";
import { dataUriToBuffer } from "../util/dataUriToBuffer";

export const saveFile = (imageName, dataUri) => {
  const publicPath = path.join(process.cwd(), "public/DB/images");
  const imagePath = path.join(publicPath, imageName);

  const imageBuffer = dataUriToBuffer(dataUri)
  try {
    fs.writeFileSync(imagePath, imageBuffer);
    return true;
  } catch (error) {
    console.error("Error generating file:", error);
    return false;
  }
}
