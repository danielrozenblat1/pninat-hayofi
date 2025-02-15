import SyllabusDisplay from "../components/Courses/Courses"
import StudentsWorks from "../components/recommends/StudentsWorks"
import Works from "../components/recommends/Works"
import styles from "./FifthScreen.module.css"

const FifthScreen=()=>{


return <>
<div className={styles.title}>אני מאמינה בעבודה פרקטית</div>
<div className={styles.description}>ואין תלמידה שיוצאת ממני בלי שהיא שולטת בתחום שהיא לומדת</div>
<Works/>
<div className={styles.description}>וככה התלמידות שלי מוציאות עבודות</div>
<div className={styles.title}>עוד בזמן הקורס!</div>
<StudentsWorks/>
</>


}
export default FifthScreen