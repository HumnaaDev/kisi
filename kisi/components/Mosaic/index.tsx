import React, { useEffect, useState } from "react";
import styles from "./mosaic.module.scss";
import { Button } from "../Button";
import { calculateGridPosition } from "../../util/calculateGridPosition";
import Image from "../Image";

export const Mosaic = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch("/api/images");
    const data = await response.json();
    setCatalog(data);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["mosaic"]}>
        {catalog?.length > 0 ?<>
        <div className={styles["heading"]}>Connect People and spaces</div>
        {catalog.map((catalog, index) => (
          <div
            key={index}
            className={`${styles["mosaic-item"]}`}
            style={calculateGridPosition(index)}
          >
            <Image
              title={catalog.title}
              description={catalog.description}
              imageUrl={catalog.image}
            />
          </div>
        ))}
        <Button onUpload={getImages} name="Add New Image" type="button" />
        </>: <div className={styles["loading"]}>Loading ...</div>}
      </div>
    </div>
  );
};
