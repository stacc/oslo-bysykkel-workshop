import "mapbox-gl/dist/mapbox-gl.css";
import dynamic from "next/dynamic";
import styles from "../styles/Tasks.module.css";
const Map = dynamic(() => import("../config/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.taskContainer}>
      <h3>Velkommen til workshop i regi av STACC💪</h3>
      <p>
        Vi skal i denne workshoppen lære litt om hvordan en bygger en web
        applikasjon med React, NextJS, Mapbox og Bergen Bysykkel sitt åpne API.
        Det er ingen krav om forkunnskaper for å delta, bare mor dere og prøv
        dere frem! Ingen spørsmål er for dumme og vi er her for å hjelpe dere så
        mye som vi klarer!
      </p>
      <br />
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "STACC WORKSHOP",
    }, // will be passed to the page component as props
  };
}
