import React from "react";
import styles from "./image.module.scss";

const Image = ({ title, description, imageUrl}) => {
  return (
    <div className={styles["box"]}>
      <div
        className={styles["front"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles["overlay"]}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles["back"]}>
        <div className={styles["overlay"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;