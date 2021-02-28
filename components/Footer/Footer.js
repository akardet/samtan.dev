import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <div className={styles["footer__background"]}>
      <div className={styles["footer__background-blue"]}>
        <Image
          width={550}
          height={300}
          className={styles["footer__background-blue"]}
          src={"/images/hero-blue.png"}
        />
      </div>
      <div className={styles["footer__background-orange"]}>
        <Image width={700} height={350} src={"/images/hero-orange.png"} />
      </div>
    </div>
  );
};

export default Footer;
