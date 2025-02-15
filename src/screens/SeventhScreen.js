import IconTextComponent from "../components/can/Can"
import styles from "./SeventhScreen.module.css"

import Treatments from "./SixthScreen"
import Laser from "../components/recommends/Laser"
import Hair from "../components/recommends/Hair"
const SeventhScreen=()=>{

    return <>
<div className={styles.title} id="טיפולים">הטיפולים שלי</div>
<div className={styles.description}>דאגתי לרכז לך את מגוון הטיפולים שלי שיהיו זמינים לך בכל רגע!</div>
<Treatments/>
<div className={styles.title}>ואיך לא.. קצת דוגמאות!</div>
<Laser/>
<Hair/>
    </>
}
export default SeventhScreen