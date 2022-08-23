import Footer from "../Footer";
import Header from "../MenuBar/Header";
import styles from "./Layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Header />
        <div className={styles.contentOnPageContainer}>
          <h1>{pageTitle}</h1>
          <div className={styles.section}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
