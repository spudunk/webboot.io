import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";

import Logo from "../public/logo.svg";
import photo from "../public/us.jpg";
import Contact from "./Contact";
import { useState } from "react";

export default function Home() {
  const services = [
    {
      id: 1,
      type: "design",
      name: "Basic Landing Page Design",
      price: "$400 - $1000",
      description:
        "Fully customized single landing page design based on our template, optimized for lead capture. 2-4 weeks",
    },
    {
      id: 2,
      type: "design",
      name: "Advanced Website Design",
      price: "$1000 - $2000",
      description:
        "Fully customized website design with 3-5 pages based on our template, optimized for lead capture. 3-6 weeks",
    },
    {
      id: 3,
      type: "development",
      name: "Basic Landing Page Development",
      price: "$500",
      description:
        "Fully SEO optimised landing page with lead capture form. 2-6 weeks",
    },
    {
      id: 4,
      type: "development",
      name: "Advanced Landing Page Development",
      price: "$1000 - $2000",
      description:
        "Fully SEO optimised landing page with lead capture form. 2-6 weeks",
    },
    {
      id: 5,
      type: "management",
      name: "Monthly Site Service",
      price: "$50",
      description: "Search Engine Optimization, Analytics Reports",
    },
    {
      id: 6,
      type: "management",
      name: "Basic Social Media",
      price: "$200 per month",
      description: "8 posts per month, 2 scheduled posts per week.",
    },
    {
      id: 7,
      type: "management",
      name: "Advanced Social Media",
      price: "$900 per month",
      description:
        "24 posts per month, 4 scheduled posts per week, 1 Reel per week, 1 extra per week",
    },
  ];

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

      <main className={styles.main}>
        {/* HERO SECTION */}
        <div className={`container ${styles.hero}`}>
          <div>
            <Logo className={`${styles.hero_logo}`} />
          </div>
          <div className={styles.hero_content}>
            <p className="text-xl">Modern Digital Marketing for Businesses</p>
            <p className="text-lg">Make more connections in the online space</p>
            <a href="#contact" className="btn btn-primary text-lg">
              Contact Us
            </a>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className={`container`}>
          <h2 className={styles.heading}>About Us</h2>
          <div className={styles.about}>
            <Image
              alt="Photo of Chris and Angel"
              className={styles.photo}
              src={photo}
            />
            <p className={styles.copy}>
              We are a digital marketing couple living in SW Washington, USA
              building modern digital assets for businesses we are passionate
              about.
            </p>
          </div>
        </div>

        {/* PRICING SECTION */}

        <div className={`container`}>
          <h2 className={styles.heading}>Services</h2>
          <p>Building a website consists of several steps: </p>
          <div className="service-buttons">
            <div
              onClick={() => setProductFilter("design")}
              className={productFilter == "design" ? "btn btn-primary" : "btn"}
            >
              Design
            </div>
            <div
              onClick={() => setProductFilter("development")}
              className={
                productFilter == "development" ? "btn btn-primary" : "btn"
              }
            >
              Development
            </div>
            <div
              onClick={() => setProductFilter("management")}
              className={
                productFilter == "management" ? "btn btn-primary" : "btn"
              }
            >
              Deployment & Optimization
            </div>
          </div>

          <p>
            {productFilter == "design"
              ? "In the design process I'll learn about your business, brand, and needs. I'll then design a custom website for you and iterate over it with you until you're happy with it. Final design will be delivered as a Figma project with all the site assets, branding, and webpage designs."
              : null}
            {productFilter == "development"
              ? "In the development phase I'll take the design and turn it into a fully function web app ready to deploy to the internet on your domain. This will be delivered as a git repo for convenient deployment and maintenance."
              : null}
            {productFilter == "management"
              ? "After development your site will need to be deployed and managed. Our management services include everything you need to start bringing traffic to your site so you can capture leads. "
              : null}
          </p>

          <div className={styles.services}>
            {services.map((s, i) => {
              if (s.type == productFilter) {
                return (
                  <div key={i} className={styles.service}>
                    <h4>{s.name}</h4>
                    <p>
                      {" "}
                      <strong>{s.price}</strong>{" "}
                    </p>
                    <p>{s.description}</p>
                  </div>
                );
              }
            })}
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
