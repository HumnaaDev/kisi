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

  const calculateGridPosition = (index) => {
    const patterns = [
      [1, 2],
      [2, 2],
      [2, 2],
      [1, 1],
      [1, 1],
      [2, 2],
      [1, 2],
      [1, 2],
    ];
  
    const patternIndex = index % patterns.length;
    const [rowSpan, colSpan] = patterns[patternIndex];
  
    return {
      gridRow: index === 0 ? '2 / span 1': `span ${rowSpan}`,
      gridColumn: `span ${colSpan}`,
    };
  };

export const Mosaic = () => {
  return (
    <div className={styles['main-container']}>
        <div className={styles['mosaic']}>
            {
                images.map((img, index) => <img key={index} className={`${styles["mosaic-item"]} `} style={calculateGridPosition(index)} src={img.src}/>)
            }
            <button>Add New Image</button>
        </div>
    </div>
   
  );
};
