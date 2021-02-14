import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

import utilStyles from "../styles/utils.module.scss";

export default function About({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navigation />
      <h1>Hello sam</h1>
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
