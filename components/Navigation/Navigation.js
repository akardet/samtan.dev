import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = ({}) => {
  return (
    <nav className={styles["nav"]}>
      <Link href="/">
        <div className={styles["logo"]}>
          <a tabIndex={0}>ST</a>
          <img
            src="/images/squircle.png"
            className={styles["logo__background"]}
          />
        </div>
      </Link>
      <ul className={styles["container"]} tabIndex={0}>
        <Link href="/about">
          <li className={styles["item"]}>
            <a tabIndex={0}>About</a>
          </li>
        </Link>
        <Link href="/writing">
          <li className={styles["item"]}>
            <a tabIndex={0}>Writing</a>
          </li>
        </Link>
        <Link href="/work">
          <li className={styles["item"]}>
            <a tabIndex={0}>Work</a>
          </li>
        </Link>
        <Link href="/contact">
          <li className={styles["item"]}>
            <a tabIndex={0}>Contact</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
