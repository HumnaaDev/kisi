import React from "react";
import styles from "./image.module.scss";
import ChevronRight from "../../assets/icons/chevron-right.svg";

const Image = ({ title, description, imageUrl }) => {
  return (
    <div className={styles["box"]}>
      <div
        className={styles["front"]}
        style={{ background: `url(${imageUrl}) center/cover` }}
      >
        <div className={styles["overlay-front"]}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={styles["icon"]}>
            <img src={ChevronRight.src} />
          </div>
        </div>
      </div>
      <div className={styles["back"]}>
        <div className={styles["overlay-back"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles["icon"]}>
          <img src={ChevronRight.src} />
        </div>
      </div>
    </div>
  );
};

export default Image;
