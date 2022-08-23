import React from "react";
import { navLinks } from "./NavLinks";
import Link from "next/link";
import styles from "../../styles/Header.module.css"
import Image from 'next/image'

export default function Header() {
  return (
  <header>
    <div className={styles.headerWrapper}>
      <Image src="/../public/stacc_logo_white.png" width={250} height={200}/>
      <nav className={styles.navLinks}>
      {navLinks.map((link, index) => {
        return (
          <ul>
            <Link href={link.path}>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        );
      })}
    </nav>
    </div>
  </header>)
}
