import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Icon from "../components/Icon";
import cx from "classnames";

import styles from "./index.module.scss";

const linkData = [
  {
    id: "github",
    eyebrow: "See my code on",
    title: "Github",
    iconName: "github",
    url: "https://github.com/akardet",
  },
  {
    id: "twitter",
    eyebrow: "See my thoughts on",
    title: "Twitter",
    iconName: "twitter",
    url: "https://twitter.com/samtan_",
  },
  {
    id: "linkedin",
    eyebrow: "Connect with me on",
    title: "LinkedIn",
    iconName: "linkedin",
    url: "https://www.linkedin.com/in/sam-tancharoensuksavai/",
  },
  {
    id: "email",
    eyebrow: "Reach me directly",
    title: "Email",
    iconName: "email",
    url: "mailto:sam@nullui.co",
  },
];

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="hero" className={styles["hero"]}>
        <div className={styles["video"]}>
          <div className={styles["video__spotlight"]}></div>
          <video autoPlay loop muted playsInline preload={"metadata"}>
            <source src="videos/memoji.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles["heading"]}>
          <h1 className={styles["heading__title"]}>Howdy, I'm Sam</h1>
          <h2 className={styles["heading__subtitle"]}>
            I'm a frontend engineer finding my place where
            <span className={cx(styles["gradient"], styles["design-text"])}>
              {" "}
              design
            </span>{" "}
            and
            <span
              className={cx(styles["gradient"], styles["development-text"])}
            >
              {" "}
              development{" "}
            </span>
            intersect.
          </h2>
          <p>
            I am currently at <a href="https://apple.com">Apple</a> building and
            tinkiering on mobile web apps. I enjoy working with React,
            Typescript, design systems, and web animations.
          </p>
          <div className={styles["social"]}>
            <ul className={styles["social__list"]}>
              {linkData.map(({ id, url, eyebrow, title, iconName }) => (
                <a
                  key={id}
                  href={url}
                  className={id === "email" && styles["email__button"]}
                >
                  {id === "email" ? eyebrow : ""}
                  <Icon name={iconName} className={styles["social__icon"]} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
