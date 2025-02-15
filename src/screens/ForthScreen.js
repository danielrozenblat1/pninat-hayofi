// BackgroundGlass.jsx
import React from 'react';
import { 
  Wallet, 
  Home, 
  Clock, 
  Heart, 
  Crown, 
  TrendingUp 
} from 'lucide-react';
import styles from './ForthScreen.module.css';
import Button from '../components/WAbutton/Button';

const BackgroundGlass = () => {
  const items = [
    {
        text: "מאוהבת בתחום היופי",
        icon: <Heart className={styles.icon} />
      },
  
  
    {
      text: "מרגישה שהזמן שלך יכול להיות שווה יותר",
      icon: <Clock className={styles.icon} />
    },
    {
        text: "מחפשת להגיע לעצמאות כלכלית",
        icon: <Wallet className={styles.icon} />
      },
    {
      text: "רוצה להתנהל בלי בוס על הראש",
      icon: <Crown className={styles.icon} />
    },
    {
        text: "רוצה להקדיש יותר זמן למשפחה ועדיין להרוויח סכומים מתגמלים",
        icon: <Home className={styles.icon} />
      },
    {
      text: "רוצה לקום כל בוקר ולעבוד במקצוע שאת באמת אוהבת",
      icon: <TrendingUp className={styles.icon} />
    }
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>:אז אם את</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text="תלחצי כאן ונדבר!"/>
    </div>
  </>;
};

export default BackgroundGlass;