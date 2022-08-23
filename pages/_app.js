import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/reset.css";
import Header from "../components/menu/Header";
import styles from "../styles/Home.module.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>🌸Stacc GIRLPOWER H22🌸</title>
        <link rel="icon" href="/favicon-32x32.png" />
        /* Nedenfor settes en custom font inn. */
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
