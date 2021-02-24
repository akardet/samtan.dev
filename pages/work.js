import Head from "next/head";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";
import WorkDetails from "../components/WorkDetails";
import Card from "../components/Card";
import cx from "classnames";

import styles from "../styles/pages/work.module.scss";

const workData = [
  {
    id: "apple",
    eyebrow: "Presently",
    icon: "apple_logo",
    title: "Frontend and UI Engineer",
    company: "Apple",
    details: [
      "Lead an effort to develop a modern component library to decouple our components from business logic and build clean reusable interfaces",
      "Developed features for Apple’s Watch Design Studio Product",
      "Developed features for the iOS Home App Discover tab that was shown in Apple’s October 2020 Keynote",
      "Diagnosed bugs and performance issues in our applications that serviced millions of users",
    ],
  },
  {
    id: "usaa",
    eyebrow: "Formerly",
    icon: "usaa_logo",
    title: "Software Engineer",
    company: "USAA",
    details: [
      "Responsible for implementing OAuth to secure the inbound and outbound calls that hit USAA’s servers.",
      "Added filtering and fixed the search functionality of a vendor application that stored internal client information.",
      "Refactored internal application for cataloging USAA’s API’s. Updated the legacy monolith application to a modern microservice architecture.",
    ],
  },
];

const freelanceData = [
  {
    id: "brendon",
    title: "Brendon Sanders Audio Engineer",
    subtitle: "Bespoke Portfolio Website",
    url: "https://brendonsandersaudio.com",
    background: {
      backgroundImage: 'url("/images/brendon_bg.png")',
    },
    details: [
      "Branding, design and developed",
      "Built with Gatsby and deployed on Netlify",
    ],
  },
  {
    id: "logos",
    title: "Logos",
    background: {
      backgroundImage: 'url("/images/logo_bg.png")',
    },
    url: "/logos",
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navigation />
      <section className={styles["container"]} id={"work"}>
        <h1 className={styles["title"]}>Past Work and Projects</h1>
        <article>
          {workData.map(({ id, eyebrow, icon, title, company, details }) => (
            <WorkDetails
              id={id}
              key={id}
              eyebrowText={eyebrow}
              iconName={icon}
              jobTitle={title}
              company={company}
              detailArray={details}
            />
          ))}
        </article>
        <article className={styles["freelance"]}>
          <div className={styles["freelance__eyebrow"]}>Freelance</div>
          {freelanceData.map((data) => {
            if (data.id === "brendon") {
              return (
                <Card url={data.url} background={data.background}>
                  <div className={styles["freelance__title"]}>{data.title}</div>
                  <div className={styles["freelance__subtitle"]}>
                    {data.subtitle}
                  </div>
                  <ul className={styles["freelance__details"]}>
                    {data.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </Card>
              );
            } else if (data.id === "logos") {
              return (
                <Card url={data.url} background={data.background}>
                  <div
                    className={cx(
                      styles["freelance__title"],
                      styles["freelance__title--logo"]
                    )}
                  >
                    {data.title}
                  </div>
                </Card>
              );
            }
          })}
        </article>
      </section>
    </Layout>
  );
}
