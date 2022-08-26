import styles from "./TLDR.module.css";
export default function TLDR({ children }) {
  return <div className={styles.tldr}>{children}</div>;
}
