import Head from "next/head";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";

import styles from "../styles/pages/about.module.scss";
import baseStyles from "../styles/base.module.scss";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`About - ${siteTitle}`}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"about"}>
        <h1 className={baseStyles["title"]}>A Little About Me</h1>
        <article className={styles["section"]}>
          <h2 className={styles["subtitle"]}>Professional Experience</h2>
          <p>
            I am currently building performant mobile web applications at Apple
            using React/Typescript, Javascript, HTML, and CSS. Over my time
            spent here, I've been lucky enough to work on products like the
            Apple Watch Design Studio, the Solo Loop, and the Shop tab in the
            iOS Home app.
          </p>
          <p>
            Before my time at Apple, I was at USAA finding my way around in the{" "}
            <em>Valley of Infrastructure and Docker</em>. My team was
            responsible for being the gatekeepers of USAA's mystical API
            Gateways. Our job was to ensure that only the right people had
            access to the right APIs within USAA. While I can say that the
            backend part of development isn't what particularly sparks my
            interests, I did gain a deeper understanding of APIs, OAuth, and
            backend infrastructure.
          </p>
        </article>
        <article className={styles["section"]}>
          <h2 className={styles["subtitle"]}>Early On</h2>
          <p>
            One could say that my passion for technology started at an early
            age. My earliest memories are of me figuring out how installation
            disks worked and installing every game I could get my hands on. I
            have distinct memories of me staring at the MSN butterfly's
            translucent wings as they flapped up and down as my dial-up internet
            crept forward.
          </p>
          <p>
            My love for design and building thoughtful intuitive interfaces
            found it's genisis during my days when I would break open a MySpace
            or Tumblr theme or spend hours downloading addons and meticulously
            arranging my UI on a popular MMORPG until I had the cleanest
            interface that had so many customizations to it that I couldn't even
            play on the out-of-the-box UI anymore.
          </p>
          <p>
            I'm in a constant pursuit to find a way to blend my passion for
            technology and my love of design, and I feel that Frontend
            development satisfies both of my passions in a way that nothing else
            has.
          </p>
          <p>
            If you've made it this far, thank you for taking the time to read a
            short synopsis about me reflecting on my career and what has gotten
            me to this point.
          </p>
        </article>
        <div className={styles["interest"]}>
          <article>
            <h2 className={styles["subtitle"]}>💻 Tech I can talk about</h2>
            <ul className={styles["list"]}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Java</li>
              <li>Gatsby</li>
              <li>NextJS</li>
            </ul>
          </article>
          {/* <article>
            <h2 className={styles["subtitle"]}>🎧 Listening To</h2>
          </article> */}
        </div>
        <div className={styles["background"]}>
          <img
            className={styles["background-blue"]}
            src={"/images/about-blue.png"}
          />
          <img
            className={styles["background-orange"]}
            src={"/images/about-orange.png"}
          />
        </div>
      </section>
    </Layout>
  );
}
