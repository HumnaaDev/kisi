export const dataUriToBuffer = (dataUri): Buffer => {
  const base64Data = dataUri.split(",")[1];
  const buffer = Buffer.from(base64Data, "base64");

  return buffer;
};
