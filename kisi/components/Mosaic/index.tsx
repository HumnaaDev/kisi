import React, { useEffect, useState } from "react";
import styles from "./mosaic.module.scss";
import { Button } from "../Button";
import { calculateGridPosition } from "../../util";
import Image from "../Image";

export const Mosaic = () => {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch("/api/images");
    const data = await response.json();
    setCatalogs(data);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["mosaic"]}>
        {catalogs?.length > 0 ?<>
        <div className={styles["heading"]}>Connect People and spaces</div>
        {catalogs.map((catalog, index) => (
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
