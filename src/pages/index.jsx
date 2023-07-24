// NextJS & React
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

// Styles
import styles from "../styles/index.module.css";

// Assets
import Logo from "/public/logo.svg";
import photo from "/public/us.jpg";

// Components
import Footer from "../components/Footer";

import { notoSans, notoSansDisplay } from "../lib/fonts";

// Dynamic components for Performance
const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <p>Loading...</p>,
});

import { home as copy } from "../lib/copy"; 

function ServiceButton(props) {
  const setProductFilter = props.setProductFilter;
  const productFilter = props.productFilter;
  const filter = props.filter;
  return (
    <div
      onClick={() => setProductFilter(filter)}
      className={productFilter == filter ? "btn btn-primary" : "btn"}
    >
      {props.children}
    </div>
  );
}

export default function Home() {
  const [productFilter, setProductFilter] = useState("design");

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

      <div className={styles.main}>
        {/* HERO SECTION */}
        <div className={`container ${styles.hero}`}>
          <div>
            <Logo className={`${styles.hero_logo}`} />
          </div>
          <div className={styles.hero_content}>
            <div className={notoSans.className}>
              <p className={`text-xl`}>Modern Digital Marketing</p>
              <p className="text-lg">Make connections in the online space</p>
            </div>
            <a href="#contact" className="btn btn-primary text-lg">
              Contact Us
            </a>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className={`container`}>
          <h2 className={`${styles.heading} ${notoSansDisplay.className}`}>
            About Us
          </h2>
          <div className={styles.about}>
            <Image
              alt="Photo of Chris and Angel"
              className={styles.photo}
              src={photo}
              sizes="(max-width: 500px) 90vw, (max-width: 800px) 40vw, 25vw"
            />

            <div className={styles.copy}>
              <p>
                We are a digital marketing couple living in SW Washington, USA
                building modern digital assets for businesses we are passionate
                about.
              </p>
              <p>
                We specialize in helping small local businesses create
                attractive online presence that shows credibility in their
                market.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICE SECTION */}

        <div className={`container`}>
          <h2 className={`${styles.heading} ${notoSansDisplay.className}`}>
            Services
          </h2>

          <p>Building a website consists of several steps: </p>
          <div className={styles.servicebuttons}>
            {copy.serviceButtons.map((b, i) => {
              return (
                <ServiceButton
                  productFilter={productFilter}
                  setProductFilter={setProductFilter}
                  filter={b.filter}
                  key={i}
                >
                  {b.label}
                </ServiceButton>
              );
            })}
          </div>

          <div className={styles.servicedescription}>
            {copy.serviceDescriptions[productFilter]}
          </div>

          <div className={styles.services}>
            {copy.services.map((s, i) => {
              if (s.type == productFilter) {
                return (
                  <div key={i} className={styles.service}>
                    <h3 className={`${notoSans.className}`}>{s.name}</h3>
                    <p>
                      <em>{s.price}</em>
                    </p>
                    <p>{s.description}</p>
                    <p className={styles.servicetime}>{s.time || null}</p>
                  </div>
                );
              }
            })}
          </div>
          <p className={styles.footnote}>
            Additional pricing and plans available. Contact us for details.
          </p>
        </div>
        <div className={`container ${styles.container}`} id="contact">
          <h2 className={styles.heading}>Contact</h2>
          <p>
            Leave your information here and I&apos;ll reach out to schedule a
            free consultation within a few days.
          </p>
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}
