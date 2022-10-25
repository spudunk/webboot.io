import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "./Hero";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>webboot.io</title>
        <meta
          name="description"
          content="Fast, Simple Effective - Digital Marketing for Small Business."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>

      <footer className={styles.footer}>
       &copy;2022 webboot.io
      </footer>
    </div>
  );
}
