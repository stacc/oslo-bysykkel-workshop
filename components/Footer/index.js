import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  {
    icon: "/icons/facebook.svg",
    link: "https://www.facebook.com/stacc.no",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/stacc.no",
  },
  {
    icon: "/icons/twitter.svg",
    link: "https://twitter.com/stacc_no",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/stacc",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {socials.map(({ icon, link }, index) => (
        <Link key={index} href={link} passHref>
          <a className={styles.link}>
            <Image src={icon} width="20" height="20" />
          </a>
        </Link>
      ))}
    </footer>
  );
}
