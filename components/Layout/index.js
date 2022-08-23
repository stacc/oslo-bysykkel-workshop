import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
