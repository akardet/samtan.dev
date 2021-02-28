import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";

import styles from "../styles/pages/logos.module.scss";

export default function Logos() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create("#nullui", {
      bounds: document.getElementById("logos"),
      inertia: true,
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
            src={"/images/nullui.png"}
          />
        </div>
      </section>
    </Layout>
  );
}