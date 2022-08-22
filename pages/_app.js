import Head from "next/head";
import "../styles/reset.css";
import Header from "../components/menu/Header";
import styles from "../styles/Home.module.css";


export default function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>🌸Stacc GIRLPOWER H22🌸</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
