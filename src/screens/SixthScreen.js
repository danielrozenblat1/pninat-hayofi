import React from 'react';
import styles from './SixthScreen.module.css';
import {
  Sun,
  Users,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Timer,
  ThumbsUp,
  Gem,
  Gift,
  Star
} from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      id: 1,
      title: 'שיזוף בהתזה',
      description: 'טיפול שיזוף טבעי ומקצועי המעניק גוון מושלם ואחיד לעור, תוך שימוש בחומרים טבעיים ובטוחים לשימוש',
      suitableFor: [
        {
          text: 'מתאים לכל סוגי העור ללא יוצא מן הכלל',
          icon: Users
        },
        {
          text: 'אידיאלי לאירועים מיוחדים וחתונות',
          icon: Star
        },
        {
          text: 'למעוניינים בשיזוף ללא חשיפה מסוכנת לשמש',
          icon: Shield
        },
        {
          text: 'לחובבי המראה השזוף כל השנה',
          icon: Sun
        }
      ],
      benefits: [
        {
          text: 'תוצאות טבעיות ומראה אחיד',
          icon: Sparkles
        },
        {
          text: 'שיזוף בטוח ללא נזקי שמש',
          icon: Heart
        },
        {
          text: 'תוצאה מיידית תוך דקות',
          icon: Zap
        },
        {
          text: 'מתאים לכל גווני העור',
          icon: CheckCircle
        }
      ],
      additionalInfo: [
        {
          text: 'השיזוף נשמר למשך 7-10 ימים',
          icon: Timer
        },
        {
          text: 'תהליך טיפול מהיר של כ-20 דקות',
          icon: Clock
        },
        {
          text: 'מוצרים היפואלרגניים בלבד',
          icon: ThumbsUp
        }
      ],
      specialOffer: {
        title: 'חבילה מיוחדת',
        text: 'חבילת 10 טיפולים במחיר אטרקטיבי + מוצר הכנה מתנה',
        icon: Gift
      }
    },
    {
      id: 2,
      title: 'הסרת שיער בלייזר',
      description: 'טיפול מתקדם להסרת שיער בטכנולוגיית לייזר חדישה ובטוחה, המעניק תוצאות מדהימות לטווח ארוך',
      suitableFor: [
        {
          text: 'מתאים לכל סוגי העור והשיער',
          icon: Users
        },
        {
          text: 'למעוניינים בפתרון ארוך טווח',
          icon: Target
        },
        {
          text: 'לסובלים משיער עבה או מרובה',
          icon: Shield
        },
        {
          text: 'למחפשים טיפול יעיל וקבוע',
          icon: CheckCircle
        }
      ],
      benefits: [
        {
          text: 'הפחתה משמעותית בצמיחת השיער',
          icon: Sparkles
        },
        {
          text: 'טיפול מהיר ויעיל במיוחד',
          icon: Zap
        },
        {
          text: 'תוצאות ארוכות טווח',
          icon: Timer
        },
        {
          text: 'בטוח לשימוש בכל אזורי הגוף',
          icon: Shield
        }
      ],
      additionalInfo: [
        {
          text: 'טכנולוגיה מתקדמת ובטוחה',
          icon: Gem
        },
        {
          text: 'מערכת קירור מובנית למניעת כאב',
          icon: Heart
        },
        {
          text: 'מותאם אישית לכל מטופל',
          icon: Target
        }
      ],
      specialOffer: {
        title: 'מבצע מיוחד',
        text: 'חבילת 10 טיפולים + אזור קטן מתנה',
        icon: Gift
      }
    }
  ];

  const renderInfoSection = (items, title) => (
    <div className={styles.infoSection}>
      <h3 className={styles.infoTitle}>{title}</h3>
      <ul className={styles.infoList}>
        {items.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            <item.icon className={styles.infoIcon} size={24} />
            <span className={styles.infoText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.treatmentsGrid}>
        {treatments.map((treatment) => (
          <div key={treatment.id} className={styles.treatmentCard}>
            <h2 className={styles.treatmentTitle}>{treatment.title}</h2>
            <p className={styles.treatmentDescription}>{treatment.description}</p>
            
            {renderInfoSection(treatment.suitableFor, 'למי מתאים הטיפול?')}
            {renderInfoSection(treatment.benefits, 'יתרונות הטיפול')}
            {renderInfoSection(treatment.additionalInfo, 'מידע נוסף')}
            
            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>
                <treatment.specialOffer.icon className={styles.infoIcon} size={24} />
                {treatment.specialOffer.title}
              </h3>
              <p className={styles.treatmentDescription}>
                {treatment.specialOffer.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;