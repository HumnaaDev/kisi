import fs from "fs";
import path from "path";

const dataUriToBuffer = (dataUri) => {
    // Extract the base64-encoded data part of the Data URI
    const base64Data = dataUri.split(',')[1];
  
    // Convert the base64-encoded data to a buffer
    const buffer = Buffer.from(base64Data, 'base64');
  
    return buffer;
}

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
