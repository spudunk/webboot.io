import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Pricing.module.css";
import Logo from "../public/logo_white.svg";
import photo from "../public/us.jpg";

export default function About() {
  return (
    <div className={styles.container}>
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
  );
}
