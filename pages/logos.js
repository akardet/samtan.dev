import Head from "next/head";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";
import cx from "classnames";

import styles from "../styles/pages/logos.module.scss";

export default function Logos() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create("#nullui", {
      bounds: document.getElementById("logos"),
    });
    Draggable.create("#em3", {
      bounds: document.getElementById("logos"),
    });
    Draggable.create("#b_note", {
      bounds: document.getElementById("logos"),
    });
    Draggable.create("#brendon", {
      bounds: document.getElementById("logos"),
    });
  }, [gsap]);

  return (
    <Layout>
      <Head>
        <title>{`Logos - ${siteTitle}`}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"logos"}>
        <div className={styles["slide"]}>
          <img
            id={"nullui"}
            width={243}
            height={116}
            className={cx(styles["logo"], styles["logo__nullui"])}
            src={"/images/nullui.png"}
          />
          <img
            id={"em3"}
            width={192}
            height={211}
            className={cx(styles["logo"], styles["logo__em3"])}
            src={"/images/em3_logo.png"}
          />
          {/* <img
            id={"brendon"}
            width={1043}
            height={1502}
            className={cx(styles["logo"], styles["logo__brendon"])}
            src={"/images/brendon_logo.png"}
          />
          <img
            id={"b_note"}
            width={603}
            height={606}
            className={cx(styles["logo"], styles["logo__note"])}
            src={"/images/b_logo.png"}
          /> */}
        </div>
      </section>
    </Layout>
  );
}
