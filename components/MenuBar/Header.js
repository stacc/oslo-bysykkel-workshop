import { navLinks } from "./NavLinks";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import Image from "next/image";

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
              <ul key={index}>
                <Link href={link.path}>
                  <li>{link.name}</li>
                </Link>
              </ul>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
