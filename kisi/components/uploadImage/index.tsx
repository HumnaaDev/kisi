import { FC, useRef } from "react";
import styles from "./uploadImage.module.scss";
import { CatalogService } from "../../service/catalogService";

interface IUploadImageProps {
  name: string;
  onUpload: () => void;
}

export const UploadImage: FC<IUploadImageProps> = ({ name, onUpload }) => {
  const fileRef = useRef(null);

  const onButtonClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = async function (e) {
          const dataUri = e.target.result;

          const resp = await CatalogService.saveCatalog(
            JSON.stringify({
              image: dataUri,
              name: file.name,
            }),
          );

          if (resp.success) {
            onUpload();
          }
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  return (
    <>
      <input
        onChange={handleFileChange}
        ref={fileRef}
        type="file"
        style={{ display: "none" }}
        data-testid="file-input"
      />
      <button
        onClick={onButtonClick}
        className={styles["rounded-button"]}
        type="button"
      >
        {name}
      </button>
    </>
  );
};
