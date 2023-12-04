import React, { FC, useState } from "react";
import styles from "./image.module.scss";
import ChevronRight from "../../assets/icons/chevron-right.svg";

interface IImageProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Image: FC<IImageProps> = ({ title, description, imageUrl }) => {
  if (title === "") {
    return <div></div>;
  }
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImage = (base64) => {
    return `data:image/jpg;base64,${base64}`;
  };

  return (
    <div
      data-testid="image-container"
      className={styles["box"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles[isHovered ? "back" : "front"]}
        style={{
          background: isHovered
            ? "#4a52ff"
            : `url(${getImage(imageUrl)}) center/cover`,
        }}
      >
        <div className={styles["overlay"]}>
          <div>
            <h2>{title}</h2>
            {isHovered && <p data-testid="description">{description}</p>}
          </div>
          <div className={styles["icon"]}>
            <img alt="icon" src={ChevronRight.src} />
          </div>
        </div>
      </div>
    </div>
  );
};
