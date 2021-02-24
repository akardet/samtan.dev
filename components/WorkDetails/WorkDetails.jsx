import styles from "./WorkDetails.module.scss";
import Icon from '../Icon'

const WorkDetails = ({id, eyebrowText = null, iconName, jobTitle, company, detailArray}) => {
  return (
    <div id={id} className={styles["container"]}>
      <div className={styles["info"]}>
        <div className={styles["info__eyebrow"]}>{eyebrowText}</div>
        <Icon className={styles["info__icon"]} name={iconName} />
        <div className={styles["info__title"]}>{jobTitle}</div>
        <div className={styles["info__company"]}>at {company}</div>
      </div>
      <ul className={styles["details"]}>
        {detailArray.map((detail, index) => <li key={index}><p>{detail}</p></li>)}
      </ul>
    </div>
  );
};

export default WorkDetails;
