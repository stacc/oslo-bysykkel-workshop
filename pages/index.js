import styles from "../components/Layout/Layout.module.css"

export async function getStaticProps(context) {
  return {
    props: {pageTitle: "💖GIRLPOWER WORKSHOP💖",
  }, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <>
        <h3>Velkommen til workshop i regi av STACC💪</h3>
        <p>Program:</p>
    </>
  );
}
