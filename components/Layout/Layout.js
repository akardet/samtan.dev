import Head from "next/head";
import { siteTitle } from ".";

import styles from "./Layout.module.scss";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@samtan_" />
        <meta
          name="twitter:title"
          content="Sam Tancharoensuksavai | Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="I'm in a constant pursuit to find a way to blend my passion for technology and my love of design"
        />
        <meta name="twitter:image" content="/images/banner.jpg" />
        <meta property="og:image" content={`/images/banner.jpg`} />
        <meta
          name="og:title"
          content="Sam Tancharoensuksavai | Frontend Engineer"
        />
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
        <link
          rel="preload"
          href="/fonts/ReenieBeanie/ReenieBeanie-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
