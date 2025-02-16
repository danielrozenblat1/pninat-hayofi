import React, { useState } from 'react';
import styles from './Courses.module.css';
import { 
  Plus, Gift, Clock, MapPin, CheckCircle2, PackageCheck, 
  Sparkles, School, Calendar, Users, Star, Heart, BookOpen, 
  Lightbulb, Camera, MessageCircle, BadgeCheck, Scissors,
  Palette, Eye, Wand2, Box, Zap, ScrollText, Gem, Brush,
  CreditCard, MapPinned
} from 'lucide-react';
import Button from "../WAbutton/Button"

const getIcon = (iconName) => {
  const icons = {
    BookOpen, Gift, Clock, MapPin, CheckCircle2, PackageCheck, 
    Sparkles, School, Calendar, Users, Star, Heart,
    Lightbulb, Camera, MessageCircle, BadgeCheck, Scissors,
    Palette, Eye, Wand2, Box, Zap, ScrollText, Gem, Brush,
    CreditCard, MapPinned
  };
  return icons[iconName];
};

const courses = [
  {
    title: "הדבקת ריסים בשיטת Beauty Pearl",
    description: "2 מפגשים, 2 מודליסטיות",
    sections: [
      {
        title: "מה בקורס?",
        icon: "BookOpen",
        items: [
          { text: "הקורס הוא אישי אחת על אחת", icon: "Users" },
          { text: "לימוד עיוני + תרגול פרקטיקה על בובה + מעשי על מודליסטיות", icon: "School" },
          { text: "מענה 24/7 בווטסאפ", icon: "MessageCircle" },
          { text: "ליווי אישי וצמוד גם לאחר הקורס + קבוצת ווטסאפ לתמיכה", icon: "Heart" }
        ]
      },
      {
        title: "מה את מקבלת?",
        icon: "Gift",
        items: [
          { text: "ערכת עבודה מפוארת", icon: "Box" },
          { text: "תעודת הסמכה מבית Beauty Pearl", icon: "BadgeCheck" },
          { text: "חוברת לימוד מקצועית", icon: "BookOpen" }
        ]
      },
      {
        title: "מה הערכה כוללת?",
        icon: "Box",
        items: [
          { text: "7 חבילות ריסים", icon: "PackageCheck" },
          { text: "דבק לבן ושחור", icon: "Gem" },
          { text: "רימובר", icon: "Wand2" },
          { text: "פינצטה", icon: "Scissors" },
          { text: "חבילת מסרקים ואפליקטורים", icon: "Brush" },
          { text: "חבילת מיקרובראשים", icon: "Brush" },
          { text: "סבון קצף לריסים", icon: "Sparkles" },
          { text: "מאוורר ריסים", icon: "Zap" },
          { text: "טבעות דבק", icon: "Gem" },
          { text: "פדים ללא סיבים", icon: "PackageCheck" }
        ]
      },
      {
        title: "בונוסים",
        icon: "Sparkles",
        items: [
          { text: "אפליקציות לעיצוב והכנת לוגו/מחירונים/סרטונים", icon: "Star" },
          { text: "חוברת שיווק ופרסום", icon: "BookOpen" },
          { text: "קובץ שיווק באינסטגרם", icon: "Camera" },
          { text: "קובץ לעצמאית מתחילה", icon: "Lightbulb" }
        ]
      },
      {
        title: "מה את לומדת?",
        icon: "School",
        items: [
          { text: "מה זה הדבקת ריסים ומה ההבדל מהלחמה", icon: "Lightbulb" },
          { text: "האם ההדבקה פוגעת בריסים הטבעיים", icon: "Eye" },
          { text: "מחזור צמיחת הריסים", icon: "Wand2" },
          { text: "תהליך עבודה נכון", icon: "CheckCircle2" },
          { text: "סוגי הריסים הקיימים בשוק", icon: "Eye" },
          { text: "התאמת ריסים למבנה העיניים", icon: "Eye" },
          { text: "יצירת סגנונות הדבקה שונים", icon: "Wand2" },
          { text: "הסרת סט ריסים", icon: "Scissors" },
          { text: "הכנה לצילום וצילום נכון", icon: "Camera" },
          { text: "הנחיות ללקוחות לפני ואחרי טיפול", icon: "MessageCircle" }
        ]
      }
    ]
  },
  {
    title: "קורס הרמת גבות + עיצוב גבות",
    description: "מפגש אחד, 2 מודליסטיות",
    sections: [
      {
        title: "מה את לומדת?",
        icon: "School",
        items: [
          { text: "מהי הרמת גבות", icon: "Eye" },
          { text: "למי מתאים הטיפול ולמי לא", icon: "CheckCircle2" },
          { text: "הצהרת בריאות", icon: "ScrollText" },
          { text: "מה הציוד הנדרש לעבודה ולמה משמש", icon: "Box" },
          { text: "זמני חומרים ותפקידם", icon: "Clock" },
          { text: "תהליך ההרמה ובדיקת מוכנות", icon: "Wand2" },
          { text: "עיצוב גבות בשעווה ופינצטה", icon: "Scissors" },
          { text: "צילום", icon: "Camera" }
        ]
      },
      {
        title: "מה את מקבלת?",
        icon: "Gift",
        items: [
          { text: "ערכת עבודה בשווי 500₪ - מתנה", icon: "Gift" },
          { text: "חומרי עבודה להרמת גבות - 3 שלבים", icon: "Gem" },
          { text: "ניילון נצמד", icon: "PackageCheck" },
          { text: "שמפו קצף לניקוי הגבות", icon: "Sparkles" },
          { text: "מסרקים לגבות ואפליקטורים", icon: "Brush" },
          { text: "מברשת לצביעת הגבה", icon: "Brush" },
          { text: "פדים קוסמטיים", icon: "PackageCheck" }
        ]
      },
      {
        title: "בונוסים",
        icon: "Sparkles",
        items: [
          { text: "אפליקציות לעיצוב והכנת לוגו/מחירונים/סרטונים", icon: "Star" },
          { text: "חוברת שיווק ופרסום", icon: "BookOpen" },
          { text: "קובץ שיווק באינסטגרם", icon: "Camera" },
          { text: "קובץ לעצמאית מתחילה", icon: "Lightbulb" }
        ]
      }
    ]
  },
  {
    title: "קורס עיצוב גבות טבעיות",
    description: "3 מפגשים, 2 מודליסטיות",
    sections: [
      {
        title: "מה נלמד?",
        icon: "School",
        items: [
          { text: "התאמת מבנה הגבה לפנים", icon: "Eye" },
          { text: "שיקום הגבות", icon: "Wand2" },
          { text: "למידה עם פינצטה שעווה ומספריים", icon: "Scissors" },
          { text: "צביעת גבות", icon: "Palette" },
          { text: "הורדת שיער בפנים ובגוף + מריטת שפם", icon: "Scissors" }
        ]
      },
      {
        title: "מה מקבלים?",
        icon: "Gift",
        items: [
          { text: "תעודת סיום קורס + ערכה", icon: "BadgeCheck" },
          { text: "ליווי 24/7 גם לאחר הקורס", icon: "MessageCircle" }
        ]
      },
      {
        title: "ערכת עבודה מלאה",
        icon: "Box",
        items: [
          { text: "מחמם שעווה", icon: "Zap" },
          { text: "שעווה", icon: "Sparkles" },
          { text: "מקלות עץ שפדל", icon: "Brush" },
          { text: "שמן להסרת שאריות שעווה", icon: "Sparkles" },
          { text: "2 פינצטות ישרה ושפיץ", icon: "Scissors" },
          { text: "מספריים לגזירה", icon: "Scissors" },
          { text: "מסרקים לגבות", icon: "Brush" },
          { text: "אפליקטורים", icon: "Brush" },
          { text: "צבע גבות + חמצן", icon: "Palette" },
          { text: "פדים ללא סיבים", icon: "PackageCheck" }
        ]
      }
    ]
  },
  {
    title: "קורס הרמת ריסים",
    description: "2 מפגשים, 2 מודליסטיות",
    sections: [
      {
        title: "מה את מקבלת?",
        icon: "Gift",
        items: [
          { text: "ערכת נובל מאסטר 3 שלבים + בוטוקס", icon: "Box" },
          { text: "מסרקים", icon: "Brush" },
          { text: "אפליקטורים", icon: "Brush" },
          { text: "מברשת להנחת החומרים", icon: "Brush" },
          { text: "טבעות דבק וחומרים", icon: "Gem" },
          { text: "שתלים", icon: "Sparkles" },
          { text: "פדים ללא סיבים", icon: "PackageCheck" },
          { text: "קלינסר לניטרול שומניות בעיניים", icon: "Sparkles" },
          { text: "שמפו ניקוי לעיניים", icon: "Sparkles" },
          { text: "קורס בוטיק אחת על אחת", icon: "Users" },
          { text: "חוברת הדרכה", icon: "BookOpen" },
          { text: "תעודת הסמכה", icon: "BadgeCheck" },
          { text: "ליווי 24/7 גם לאחר הקורס", icon: "MessageCircle" }
        ]
      },
      {
        title: "בונוסים",
        icon: "Sparkles",
        items: [
          { text: "קובץ שיווק ופרסום", icon: "Star" },
          { text: "מדריך לעצמאית", icon: "BookOpen" },
          { text: "לימוד צילום בעדשת מאקרו", icon: "Camera" },
          { text: "אפליקציות עיצוב", icon: "Palette" }
        ]
      }
    ]
  }
];

const CourseSection = ({ title, icon, items }) => {
  const IconComponent = getIcon(icon);
  
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <IconComponent size={24} className={styles.titleIcon} />
        <span>{title}</span>
      </h3>
      <ul className={styles.sectionList}>
        {items.map((item, index) => {
          const ItemIcon = getIcon(item.icon);
          return (
            <li key={index} className={styles.sectionItem}>
              <ItemIcon size={18} className={styles.itemIcon} />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div 
        className={styles.cardHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.expandButton}>
          <Plus 
            size={20} 
            className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ''}`}
          />
        </div>
        <div className={styles.headerContent}>
          <h2 className={styles.courseTitle}>{course.title}</h2>
          <p className={styles.courseDescription}>{course.description}</p>
        </div>
      </div>
      
      <div className={`${styles.cardContent} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.contentLayout}>
          <div className={styles.mainContent}>
            {course.sections.map((section, index) => (
              <CourseSection key={index} {...section} />
            ))}
          </div>
        </div>
        <Button text="אני רוצה לשמוע עוד" message={`היי פנינה הגעתי מהדף, אשמח לעוד עוד על ${course.title}`}/>
        </div>
      </div>
    
  );
};

const CoursesDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} dir="rtl">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesDisplay;