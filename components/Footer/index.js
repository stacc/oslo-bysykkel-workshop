import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()}©
      <Link href="https://stacc.com" passHref>
        <a className={styles.link}>Stacc</a>
      </Link>
    </footer>
  );
}
