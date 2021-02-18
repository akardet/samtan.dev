import Link from "next/link";
import cx from "classnames";

import styles from "./Hero.module.scss";

const Hero = ({}) => {
  return (
    <section className={styles["hero__container"]}>
      <div className={styles["hero__profile"]}>
        <img
          className={styles["hero__profile-image"]}
          src={"/images/me-beans-profile.png"}
        />
        <img
          className={styles["hero__profile-arrow"]}
          src={"/images/arrow.png"}
        />
        <div className={styles["hero__subtext"]}>
          <p>
            <span
              className={cx(styles["hero__subtext-heading"], styles["bold"])}
            >
              Mr. Beans
            </span>
            <br />
            CTO, Chief Treat Officer
          </p>
        </div>
      </div>
      <article className={styles["hero__textbox"]}>
        <h1 className={styles["hero__title"]}>
          Hi <span className={styles["wave"]}>👋🏼</span> I’m Sam
          Tancharoensuksavai
        </h1>
        <p className={styles["hero__text"]}>
          I am a <span className={styles["bold"]}>Frontend Engineer</span>{" "}
          working on building elegant mobile web apps at{" "}
          <Link href={"/work/#apple"}>
            <a className={styles["bold"]}>Apple</a>
          </Link>
          .
        </p>
        <p className={styles["hero__text"]}>
          In my 5+ years as a developer, I’ve had my hands on nearly all parts
          of a modern software stack, but I’ve found my passion lies at the
          intersection where design and software meet.{" "}
        </p>
        <button>Get in contact</button>
      </article>
      <div className={styles["hero__background"]}>
        <img
          className={styles["hero__background-blue"]}
          src={"/images/hero-blue.png"}
        />
        <img
          className={styles["hero__background-orange"]}
          src={"/images/hero-orange.png"}
        />
      </div>
    </section>
  );
};

export default Hero;
