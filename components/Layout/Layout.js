import Head from "next/head";
import Link from "next/link";

import styles from "./Layout.module.scss";

const name = "Sam Tancharoensuksavai";
export const siteTitle = "Sam - Frontend Engineer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi, I'm Sam Tancharoensuksavai. I'm in a constant pursuit to find a way to blend my passion for
          technology and my love of design"
        />
        <meta property="og:image" content={`/images/banner2.jpg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
