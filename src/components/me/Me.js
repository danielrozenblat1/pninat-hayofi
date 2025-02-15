import React from 'react';
import styles from './Me.module.css';
import shiranImage from "../../images/פנינה גירד תדמית.png";
import Recommends from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={shiranImage} alt="פנינה ג'ירד" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>פנינה ג'ירד</h1>
          <div className={styles.subtitle}>
            "את כל הטעויות שהיה אפשר לעשות - עשיתי. היום אני מלמדת אחרות איך להצליח מהר יותר."
          </div>
          <p className={styles.description}>
            הכל התחיל כשהייתי ילדה קטנה. תמיד אהבתי לאפר את המשפחה שלי, לעצב להן גבות, לטפל בציפורניים - פשוט הייתי מאוהבת בתחום היופי. אבל החיים הובילו אותי לכיוון אחר לגמרי, ומצאתי את עצמי מנהלת קצבייה. הייתה לי משכורת טובה ועבודה יציבה, אבל משהו בפנים תמיד לחש לי שאני יכולה יותר.
          </p>
          <p className={styles.description}>
            יום אחד החלטתי לעשות מעשה. עזבתי הכל והתחלתי מחדש. השקעתי את כל החסכונות שלי בקורסים - עשרות אלפי שקלים. התאכזבתי לא פעם מהלימודים, אבל לא ויתרתי. אפילו כשנפצעתי באמצע הדרך, המשכתי ללמוד. תרגלתי על כל מי שרק הסכימה - חברות, משפחה, כולן. בדרך גיליתי שהאכזבות שלי מהקורסים היו בעצם המתנה הכי גדולה - הן לימדו אותי בדיוק איך צריך ללמד אחרת.
          </p>
          <p className={styles.description}>
            היום אני מעבירה קורסים בארבעה תחומים שונים ומעניקה טיפולי יופי מיוחדים. כל מה שלמדתי בדרך הקשה, אני מלמדת את התלמידות שלי בדרך הקצרה. כי בסוף הבנתי - זה לא משנה מאיפה מתחילים, אלא לאן רוצים להגיע.
          </p>
        </div>
      </div>
      <Recommends/>
    </>
  );
};

export default AboutMe;