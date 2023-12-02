import React from 'react';
import styles from './mosaic.module.scss';
import img1 from '../../../images/image.png'
import img4 from '../../../images/image1.png'
import img2 from '../../../images/image2.png'
import img6 from '../../../images/image3.png'
import img5 from '../../../images/image4.png'
import img7 from '../../../images/image5.png'
import img3 from '../../../images/image6.png'

const images = [
    img1, img2, '', img3, img4, img5, img6, img7
]

export const Mosaic = () => {
  return (
    <div className={styles['main-container']}>
        <div className={styles['mosaic']}>
            {
                images.map((img, index) => <img className={`${styles["mosaic-item"]} ${styles[`img${index + 1}`]}`} src={img.src}/>)
            }
        </div>
        <button>Add New Image</button>
    </div>
   
  );
};
