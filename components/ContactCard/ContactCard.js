import Icon from "../Icon";
import styles from "./ContactCard.module.scss";

const ContactCard = ({ id, url, eyebrowText, titleText, iconName }) => {
  return (
    <div id={id} className={styles["card"]}>
      <a className={styles["card__link"]} href={url}>
        <Icon className={styles["card__icon"]} name={iconName} />
        <div className={styles["card__text"]}>
          <div className={styles["card__eyebrow"]}>{eyebrowText}</div>
          <div className={styles["card__title"]}>{titleText}</div>
        </div>
        <Icon className={styles["card__chevron"]} name={"chevron_right"} />
      </a>
    </div>
  );
};

export default ContactCard;
