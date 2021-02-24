import Head from "next/head";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";

import styles from "../styles/pages/contact.module.scss";

const linkData = [
  {
    id: "",
    eyebrow: "",
    title: "",
    icon: "",
  },
];

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact | ${siteTitle}`}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"contact"}>
        <h1>Places You Can Find Me</h1>
        <p>
          Below are some places where you can find me around the internet. Don't
          be shy with reaching out. I would love to connect!
        </p>
        <div className={styles["links"]}></div>
      </section>
    </Layout>
  );
}
