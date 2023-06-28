import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";

import Logo from "../public/logo.svg";
import photo from "../public/us.jpg";
import Contact from "./Contact";

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
        {/* HERO SECTION */}
        <div className={`container ${styles.hero}`}>
          <div>
            <Logo className={`${styles.hero_logo}`} />
          </div>
          <div className={styles.hero_content}>
            <p className="text-xl">Modern Digital Marketing for Businesses</p>
            <p className="text-lg">Make more connections in the online space</p>
            <a href="#contact" className="btn-primary text-lg">
              Contact Us
            </a>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className={`container`}>
          <h2 className={styles.heading}>About Us</h2>
          <div className={styles.content}>
            <div className={styles.photo_container}>
              <Image
                alt="Photo of Chris and Angel"
                className={styles.photo}
                src={photo}
              />
            </div>
            <p className={styles.copy}>
              We are a digital marketing couple living in SW Washington, USA
              building modern digital assets for businesses we are passionate
              about.
            </p>
          </div>
        </div>

        {/* PRICING SECTION */}

        <div className={`container`}>
          <h2 className={styles.heading}>Pricing</h2>
          <div className={styles.content}>
            <div className={styles.card}>
              <h3>Website</h3>
              <p>Landing Page Design - $100</p>
              <ul>
                <li>Starting price for basic design (like ours)</li>
                <li>More extensive designs available</li>
                <li>Figma mockup w/ branding</li>
              </ul>
              <p>Landing Page Dev - $200</p>
              <ul>
                <li>Fully custom</li>
                <li>SEO optimised</li>
                <li>Mobile optimised</li>
                <li>React, NextJS, Firebase</li>
              </ul>
              <p>Monthly service - $50</p>
              <ul>
                <li>Hosting</li>
                <li>Security</li>
                <li>Analytics reports</li>
                <li>Domain &amp; DNS management</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Social Media</h3>
              <p>8 posts per month - $100</p>
              <ul>
                <li>2 scheduled posts per week</li>
              </ul>
              <p>24 posts per month - $300</p>
              <ul>
                <li>4 scheduled posts per week</li>
                <li>1 Reel per week</li>
                <li>1 extra per week</li>
              </ul>
              <span>photos &amp; videos may need to be provided</span>
            </div>
          </div>
          <p className={styles.footnote}>
            Additional pricing and plans available. Contact us for details.
          </p>
        </div>

        <Contact />
      </main>

      <footer className={`container footer`}>&copy;2022 webboot.io</footer>
    </>
  );
}
