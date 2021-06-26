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
];

const emailLink = {
  id: "email",
  eyebrow: "Reach me directly",
  title: "Email",
  iconName: "email",
  url: "mailto:sam@nullui.co",
};

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
          <div className={styles["social"]}>
            <ul className={styles["social__list"]}>
              {linkData.map(({ id, url, title, iconName }) => (
                <li key={id} className={styles["social__item"]}>
                  <a href={url}>
                    <span className={styles["social__name"]}>{title}</span>
                    <Icon name={iconName} className={styles["social__icon"]} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
            Currently at{" "}
            <a href="https://apple.com" className={styles["link"]}>
              Apple
            </a>{" "}
            building and tinkering on mobile web apps. I enjoy working with
            React, Typescript, design systems, and web animations.
          </p>
          <a href={emailLink.url} className={styles["email__button"]}>
            {emailLink.eyebrow}
            <Icon
              name={emailLink.iconName}
              className={styles["social__icon"]}
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}
