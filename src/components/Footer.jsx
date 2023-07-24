import Icon from "@mdi/react";
import { mdiInstagram, mdiEmail, mdiPhone } from "@mdi/js";
import styles from "../styles/Footer.module.css";
const iconSize = "1.4em";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content}`}>
          <a href="tel:+13608272736" className={styles.button}>
            <Icon path={mdiPhone} size={iconSize} />
            (360) 827-2736
          </a>

          <a href="mailto:info@webboot.io" className={styles.button}>
            <Icon path={mdiEmail} size={iconSize} />
            info@webboot.io
          </a>

          <a
            href="https://www.instagram.com/angelvictoriaallen/"
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <Icon path={mdiInstagram} size={iconSize} />
            angelvictoriaallen
          </a>
        </div>
        &copy;2022 webboot.io
      </div>
    </footer>
  );
}
