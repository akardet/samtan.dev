import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import cx from "classnames";

import styles from "./index.module.scss";

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
        </div>
      </section>
      <section id="work" className={styles["work"]}>
        <h1>text</h1>
      </section>
    </Layout>
  );
}
