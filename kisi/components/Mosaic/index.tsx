import React from 'react';
import styles from './mosaic.module.scss';
import img1 from '../../../images/image.png'
import img4 from '../../../images/image1.png'
import img2 from '../../../images/image2.png'
import img6 from '../../../images/image3.png'
import img5 from '../../../images/image4.png'
import img7 from '../../../images/image5.png'
import img3 from '../../../images/image6.png'
import { Button } from '../Button';
import { calculateGridPosition } from '../../util';
import Image from '../Image'

const images = [
    img1, img2, '', img3, img4, img5, img6, img7
]

export const Mosaic = () => {
  return (
    <div className={styles['main-container']}>
        <div className={styles['mosaic']}>
            <div className={styles["heading"]}>Connect People and spaces</div>
            {
                images.map((img, index) => 
                    <div className={`${styles["mosaic-item"]}`} style={calculateGridPosition(index)} >
                        <Image title={'title'} description={'description'} imageUrl={img.src} />
                    </div>)
            }
            <Button name="Add New Image" type="button"/>
        </div>
    </div>
   
  );
};
