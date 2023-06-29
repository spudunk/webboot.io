import Head from "next/head";
import styles from "../styles/index.module.css";


export default function Home() {
  return (
    <>
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
       
      </main>

      <footer className={`container footer`}>&copy;2022 webboot.io</footer>
    </>
  );
}
