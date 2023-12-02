import { getFiles } from "../../service/readFiles";
import { saveFile } from "../../service/writeFiles";
import article from "../../data/articles.json";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const images = await getFiles();
    const data = [];
    for (let index = 0; index < images.length; index++) {
      data.push({
        title: article[index].title,
        description: article[index].description,
        image: `DB/images/${images[index]}`,
      });
    }
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const { image, name } = JSON.parse(req.body);
    const response = saveFile(name, image)

    if (response) {
        res.status(200).json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
  }
}
