import SyllabusDisplay from "../components/Courses/Courses"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
<div className={styles.title}>"פנינה, שיגעת אותי! מה את מציעה לי?"</div>
<div className={styles.description}>אני מציעה לך כניסה לעולם הביוטי ב-4 דרכים שונות <br/>תכירי את ארבעת הקורסים שלי</div>
<SyllabusDisplay/>
</>


}
export default ThirdScreen