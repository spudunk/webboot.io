import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Logo from "../public/logo_white.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.text}>
        <div>Fast, Simple, Effective</div>
        <div>Digital Marketing for Small Business</div>
      </div>
      <a href="#contact" className={styles.button}>
        Contact Us
      </a>
    </div>
  );
}
