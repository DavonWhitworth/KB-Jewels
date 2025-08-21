import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.section}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p className={styles.text}>
          <Link className={styles.link} href="/contact">Message Us</Link>
            <br />
            +91 70888 06000
          </p>
        </section>

        <div className={styles.copy}>&copy; 2024 KB Jewels. All rights reserved.</div>
      </div>
    </footer>
  );
}
