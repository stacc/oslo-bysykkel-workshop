import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stacc Workshop</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
