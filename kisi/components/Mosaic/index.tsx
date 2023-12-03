import React, { useEffect, useState } from "react";
import styles from "./mosaic.module.scss";
import { UploadImage } from "../uploadImage";
import { calculateGridPosition } from "../../utils/calculateGridPosition";
import Image from "../Image";
import { CatalogService } from "../../service/catalogService";

export const Mosaic = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const data = await CatalogService.getCatalog()
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
        <UploadImage onUpload={getImages} name="Upload New Image" />
        </>: <div className={styles["loading"]}>Loading ...</div>}
      </div>
    </div>
  );
};
