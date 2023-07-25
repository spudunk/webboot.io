// NextJS & React
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

// Styles
import styles from "../styles/index.module.scss";

// Assets
import photo from "/public/us.jpg";
import { poppins } from "../lib/fonts";
import { home as copy } from "../lib/copy";

// Components
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Favicon from "../components/Favicon";
import { WBLogo } from "../components/Graphics";

// Dynamic components for Performance
const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <p>Loading...</p>,
});

// For setting the product filter
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

// -----------------------------------------
// ----- MAIN INDEX PAGE FUNCTION ----------
// -----------------------------------------
export default function Home() {
  const [productFilter, setProductFilter] = useState("design");

  return (
    <>
      <Head>
        <title>webboot.io</title>
        <Meta />
        <Favicon />
      </Head>

      <div className={styles.main}>
        {/* HERO SECTION */}
        <div className={`${styles.hero}`}>
          <div className={`container ${styles.hero__container}`}>
            <WBLogo className={`${styles.hero__logo}`} />

            <div className={`${styles.hero__content} ${poppins.className}`}>
              <p>Modern Digital Marketing</p>
              <h1>Don&apos;t get overlooked online</h1>

              <a
                onClick={(e) => {
                  e.preventDefault;
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section className={`${styles.about}`}>
          <div className={`container`}>
            <h2 className={`${styles.heading} ${poppins.className}`}>
              About Us
            </h2>
            <div className={styles.about__content}>
              <Image
                alt="Photo of Chris and Angel"
                className={styles.about__photo}
                src={photo}
                sizes="(max-width: 500px) 90vw, (max-width: 800px) 40vw, 25vw"
              />
              <div className={styles.about__copy}>
                <p>
                  We are a digital marketing couple living in SW Washington, USA
                  building modern digital assets for businesses we are
                  passionate about.
                </p>
                <p>
                  We specialize in helping small local businesses create
                  attractive online presence that shows credibility in their
                  market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE SECTION */}

        <div className={`container ${styles.service}`}>
          <h2 className={`${poppins.className}`}>Services</h2>

          <p>Building a website consists of several steps: </p>

          {/* Create buttons to filter services */}
          <div className={`${styles.service__buttons} ${poppins.className}`}>
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

          {/* Service Category Description paragraph */}
          <div className={styles.service__description}>
            {copy.serviceDescriptions[productFilter]}
          </div>

          {/* Service Cards */}
          <div className={styles.service__list}>
            {copy.services.map((s, i) => {
              if (s.type == productFilter) {
                return (
                  <div key={i} className={styles.service__card}>
                    <h3 className={`${poppins.className}`}>{s.name}</h3>
                    <p>
                      <em>{s.price}</em>
                    </p>
                    <p>{s.description}</p>
                    <p className={styles.service__time}>{s.time || null}</p>
                  </div>
                );
              }
            })}
          </div>

          <p className={styles.footnote}>
            Additional pricing and plans available. Contact us for details.
          </p>
        </div>
        <div className={`container ${styles.contact}`} id="contact">
          <h2 className={`${styles.heading} ${poppins.className}`}>
            Contact
          </h2>
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
