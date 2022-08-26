import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export const navLinks = [
  { name: "Hjem", path: "/" },
  {
    name: "Oppgaver",
    path: "/tasks",
  },
  {
    name: "Dokumentasjon",
    path: "/documentation",
  },
];

export default function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
          <a>
            <Image src="/stacc_logo_white.png" width={150} height={50} />
          </a>
        </Link>
        <nav className={styles.navLinks}>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} passHref>
                <a className={styles.link} key={index}>
                  {link.name}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
