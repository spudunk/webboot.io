import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import photo from "../public/us.jpg";

export default function About() {
  return (
    <div className={styles.container}>
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
          building modern digital assets for businesses we are passionate about.
        </p>
      </div>
    </div>
  );
}
