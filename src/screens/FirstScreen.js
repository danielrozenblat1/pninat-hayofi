import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import learn from "../Icons/wired-lineal-1581-mascara-eyelash-hover-pinch (2).json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import laser from "../Icons/wired-lineal-1001-shop-scanner-hover-pinch (1).json"
import middleImage from "../images/פנינה גירד תדמית.png";
import rightImage from "../images/פנינת היופי תמונה ימנית.png"
import leftImage from "../images/פנינת היופי תמונה שמאלית.png"
import logo from "../images/פנינת היופי לוגו.png"
import GradientLoader from '../components/loader/Loader';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage,
      logo
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <img 
          src={logo} 
          alt="Pninat Hayofi Logo" 
          className={styles.logo}
        />
  
        <div className={styles.buttonContainer}>
          <PinkScrollButton text="קורסים בתחום הביוטי" icon={learn} to="קורסים"/>
          <PinkScrollButton text="טיפולי לייזר ושיזוף בהתזה" icon={laser} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;