import { FC, useRef } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  name: string;
  type: "button" | "submit" | "reset";
  onUpload: () => void;
}

export const Button: FC<IButtonProps> = ({ name, type, onUpload }) => {
  const fileRef = useRef(null);

  const onButtonClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    try {
      const fileInput = event.target;
      const file = fileInput.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = async function (e) {
            const dataUri = e.target.result;
            const fileName = file.name;
            
          const resp = await fetch("/api/images", {
            method: "POST",
            body: JSON.stringify({
              image: dataUri,
              name: file.name,
            }),
          });

          if (resp.ok) {
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
      />
      <button
        onClick={onButtonClick}
        className={styles["rounded-button"]}
        type={type}
      >
        {name}
      </button>
    </>
  );
};
