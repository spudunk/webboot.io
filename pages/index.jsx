import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { Noto_Sans, Noto_Sans_Display } from "next/font/google";

import Logo from "../public/logo.svg";
import photo from "../public/us.jpg";
// import Contact from "./Contact";
import { useState } from "react";
import Footer from "./Footer";

import dynamic from "next/dynamic";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["500", "700"] });
const notoSansDisplay = Noto_Sans_Display({ subsets: ["latin"] });

const Contact = dynamic(() => import("./Contact"), {
  loading: () => <p>Loading...</p>,
});

const services = [
  {
    type: "design",
    name: "Advanced Website Design",
    price: "$1000 - $2000",
    description:
      "Fully customized website design with 3-5 pages and CMS content, optimized for lead capture and content driven SEO (blogs, articles).",
    time: "2-6 weeks",
  },
  {
    type: "design",
    name: "Basic Landing Page Design",
    price: "$400 - $1000",
    description:
      "Fully customized single landing page design based on our template, optimized for lead capture.",
    time: "1-3 weeks",
  },
  {
    type: "development",
    name: "Advanced Website Development",
    price: "$1000 - $5000",
    description:
      "Fully SEO optimised landing page with lead capture form and dynamic content like recent articles. User accounts, payments, subscriptions, etc.",
    time: "3-6 weeks",
  },
  {
    type: "development",
    name: "Basic Landing Page Development",
    price: "$500",
    description: "Fully SEO optimised landing page with lead capture form.",
    time: "2-4 weeks",
  },
  {
    type: "management",
    name: "Advanced SEO",
    price: "$200 / month",
    description: `Content creation with keyword and market analysis to increase traffic.`,
  },
  {
    type: "management",
    name: "Monthly Site Service",
    price: "$50 / month",
    description: "Basic SEO, Analytics Reports",
  },
  {
    type: "social",
    name: "Advanced Social Media",
    price: "$900 / month",
    description: `24 posts per month (4 scheduled posts per week, 1 Reel per week, 1 extra per week)`,
  },
  {
    type: "social",
    name: "Basic Social Media",
    price: "$200 / month",
    description: `8 posts per month (2 scheduled posts per week)`,
  },
];

const serviceDescriptions = {
  design:
    "In the design process I'll learn about your business, brand, and needs. I'll then design a custom website for generating the leads you want and iterate until you're happy with it. The final design will be delivered as a Figma project with all the site assets, branding, and webpage designs.",
  development:
    "In the development phase I'll take the design and turn it into a fully function web app ready to deploy to the internet. This will be delivered as a git repo for convenient deployment and maintenance.",
  management:
    "After development your site will need to be deployed and managed. Our management services include everything you need to start driving traffic to your site and optimizing it so you can capture leads.",
  social:
    "Social media content is optional but can be a very effective way to create interest from potential customers and direct them to your website for conversion. It's common to use social media posts that link back to articles or content with lead capture forms at the bottom.",
};

const serviceButtons = [
  { label: "Design", filter: "design" },
  { label: "Development", filter: "development" },
  { label: "Deployment and Managment", filter: "management" },
  { label: "Social Media", filter: "social" },
];

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        {/* PRICING SECTION */}

        <div className={`container`}>
          <h2 className={`${styles.heading} ${notoSansDisplay.className}`}>
            Services
          </h2>

          <p>Building a website consists of several steps: </p>
          <div className={styles.servicebuttons}>
            {serviceButtons.map((b, i) => {
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
            {serviceDescriptions[productFilter]}
          </div>

          <div className={styles.services}>
            {services.map((s, i) => {
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
