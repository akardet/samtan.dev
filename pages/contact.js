import Head from "next/head";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import Layout, { siteTitle } from "../components/Layout";

import styles from "../styles/pages/contact.module.scss";
import baseStyles from "../styles/base.module.scss";

const linkData = [
  {
    id: "github",
    eyebrow: "See my code on",
    title: "Github",
    iconName: "github",
    url: "/",
  },
  {
    id: "twitter",
    eyebrow: "See my thoughts on",
    title: "Twitter",
    iconName: "twitter",
    url: "/",
  },
  {
    id: "linkedin",
    eyebrow: "Connect with me on",
    title: "LinkedIn",
    iconName: "linkedin",
    url: "/",
  },
  {
    id: "email",
    eyebrow: "Reach me directly",
    title: "Email",
    iconName: "email",
    url: "/",
  },
];

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact - ${siteTitle}`}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"contact"}>
        <h1 className={baseStyles["title"]}>Places You Can Find Me</h1>
        <p>
          Below are some places where you can find me around the internet. Don't
          be shy with reaching out. I would love to connect!
        </p>
        <div className={styles["links"]}>
          {linkData.map(({ id, url, eyebrow, title, iconName }) => (
            <ContactCard
              id={id}
              url={url}
              eyebrowText={eyebrow}
              titleText={title}
              iconName={iconName}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
