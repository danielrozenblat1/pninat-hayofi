import { MapPin } from 'lucide-react';
import styles from './Bonus.module.css';

const LocationCard = () => {
  return (
    <div className={styles.card}>
      <MapPin className={styles.icon} />
      <div className={styles.textContainer}>
        <p className={styles.address}>המסחר 9 אשדוד</p>
        <p className={styles.hours}>פתוח בימים א-ו</p>
        <p className={styles.welcome}>מחכה לראותכן!</p>
      </div>
    </div>
  );
};

export default LocationCard;