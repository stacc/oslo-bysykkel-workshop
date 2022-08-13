import Head from "next/head";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stacc girlpower workshop H22</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
