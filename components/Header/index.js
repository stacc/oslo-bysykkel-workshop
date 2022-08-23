import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const links = [{ href: "/", label: "Hjem" }];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} passHref>
        <a>
          <Image src={"/stacc_logo_white.png"} width={150} height={50} />
        </a>
      </Link>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} passHref>
                <a className={styles.navItem}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
