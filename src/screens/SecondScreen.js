import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import boss from "./../Icons/wired-lineal-187-suitcase-morph-open (3).json"
import female from "../Icons/wired-lineal-633-female-standing-hover-success.json"
import money from "../Icons/wired-lineal-414-money-bag-dollar-hover-shake (8).json"
import SmallBox from "../components/SmallBox/SmallBox"
import coins from '../Icons/wired-outline-291-coin-dollar-morph-coins.json'
import happy from "../Icons/wired-outline-2474-sparkles-glitter-hover-pinch.json"
import family from "../Icons/wired-outline-635-family-hover-pinch.json"
import days from "../Icons/wired-outline-28-calendar-hover-pinch (1).json"
import Recommends from "../components/recommends/Recommends"
const SecondScreen=()=>{

    return <>
<div className={styles.title} id="קורסים">יש סיבה שהגעת לכאן</div>
<div className={styles.description}>יש לך תשוקה לתחום הביוטי ותמיד חלמת</div>
<div className={styles.row}>
<IconTextComponent text="לקום כל בוקר בתחושה של הגשמה עצמית" icon={female}/>
<IconTextComponent text="לנהל את עצמך בלי אף בוס על הראש" icon={boss}/>
<IconTextComponent text="להכניס סכומים שלא דמיינת מהתחום" icon={money}/>
</div>
<div className={styles.description}>אבל את כאן בעיקר כי הבנת</div>
<div className={styles.title} style={{textDecoration:"underline", textDecorationColor: "#FF69B4"}}>שהזמן שלך יכול להיות שווה יותר</div>
<div className={styles.description}>ואני כאן להגיד לך שזה אפשרי!</div>
<div className={styles.row}>
    <SmallBox text="להרוויח מהתחום סכומים שפעם רק חלמת עליהם" icon={coins}/>
    <SmallBox text="להצליח לשלב בין העסק לחיי המשפחה" icon={family}/>
</div>
<div className={styles.row} >
    <SmallBox text="לחיות לפי הלוז שלך ולנהל את עצמך" icon={days}/>
    <SmallBox text="לסיים כל יום בתחושת הנאה ולא תסכול ועייפות" icon={happy}/>
</div>
<div className={styles.title}>אבל רגע לפני שאסביר לך איך..</div>
    </>
}
export default SecondScreen