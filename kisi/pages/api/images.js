import { getFiles } from "../../service/readFiles";
import { saveFile } from "../../service/writeFiles";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const data = await getFiles();
      
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
      }
    }

    if (req.method === "POST") {
      const { image, name } = JSON.parse(req.body);
      const response = await saveFile(name, image);

      if (response) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
      }
    }

    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

