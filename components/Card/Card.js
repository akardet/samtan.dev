import styles from "./Card.module.scss";

const Card = ({ children, url, background }) => {
  return (
    <div style={{ ...background }} className={styles["card"]}>
      <a className={styles["card__link"]} href={url}>
        <div className={styles["card__wrapper"]}>{children}</div>
      </a>
    </div>
  );
};

export default Card;
