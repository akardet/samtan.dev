import Head from "next/head";
import cx from "classnames";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/pages/about.module.scss";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"about"}>
        <h1 className={styles["title"]}>A Little About Me</h1>
        <article className={styles["section"]}>
          <h2 className={styles["subtitle"]}>Professional Experience</h2>
          <p>
            I am currently building highly performant and reusable components
            for mobile web applications at Apple using React, Javascript, HTML,
            and CSS. Over my time spent here, I've had the pleasure of working
            on a number of rewarding projects such as, building features for the
            Apple Watch Design Studio, a product that allows customers to pick
            and choose any Apple Watch case and band combination that they
            prefer. One of my most memorable moments was having a product that I
            had been working on, the Discover tab in the native iOS Home app
            that helps customers find HomeKit enabled smart home devices, be
            featured in Apple's 2020 October Keynote event.
          </p>
          <p>
            Before my time at Apple, I was at USAA finding my way around in
            the *Valley of Docker and Infrastructure*. My team was responsible
            for being the gatekeepers of USAA's mystical API Gateways, and my
            job was to ensure that only the right people had access to the
            correct APIs within USAA. While I can say that the backend part of
            development isn't what particularly sparks my interests, I did gain
            a deeper understanding of how the internet functions and the
            protocols with which every request on the internet runs. Which in
            the end helped me understand how modern web applications run today.
          </p>
        </article>
        <article className={styles["section"]}>
          <h2 className={styles["subtitle"]}>Early On</h2>
          <p>
            My passion for technology stems from an early age. My earliest
            memories are me figuring out how installation discs worked by the
            time I was eight years old and installing every game I could get my
            hands on. I have distinct memories of me staring at the MSN
            butterfly's translucent wings as they flapped up and down for what
            seemed like eons as I waited for our chunky HP to boot up.
          </p>
          <p>
            My love of design and building thoughtful intuitive interfaces can
            be attributed to my days when I would break open a MySpace or Tumblr
            theme or spend hours downloading addons and meticulously arranging
            my UI on World of Warcraft until I had the cleanest interface that
            had so many customizations to it that I couldn't even play on the
            out-of-the-box UI anymore.
          </p>
          <p>
            I'm in a constant pursuit to find a way to blend my passion for
            technology and my love of design, and I feel that Frontend
            development satisfies both of my passions in a way that nothing else
            has.
          </p>
        </article>
        <div className={styles["interest"]}>
          <article>
            <h2 className={styles["h4"]}>💻 Tech I can talk about</h2>
            <ul>
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
          <article>
            <h2 className={styles["h4"]}>🎧 Music I can talk about</h2>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
