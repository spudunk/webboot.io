import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>webboot.io</title>
        <meta name="description" content="Optimized, Affordable, Effective. Websites for small business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>webboot.io</h1>
        <p>website coming soon</p>
        <a href="mailto:hickscme@gmail.com?subject=webboot.io inquiry">Email Me</a>

      </main>
      {/* 
      <footer className={styles.footer}>
       
      </footer> */}
    </div>
  )
}
