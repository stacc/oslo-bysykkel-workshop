import "mapbox-gl/dist/mapbox-gl.css";
import dynamic from "next/dynamic";
import styles from "../styles/Tasks.module.css";
import React from "react";
import { Marker } from "react-map-gl";
import Image from "next/image";

const Map = dynamic(() => import("../config/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.taskContainer}>
      <h3>Velkommen til workshop i regi av STACC! Ny Emoji !!!</h3>
      <div>
        I denne workshopen skal vi lære litt om hvordan vi
        <ul>
          <li>👩‍💻 bygger en web-applikasjon med React og NextJs</li>
          <li>🏃‍ jobber med API-er for å hente data</li>
          <li>🧭 og visualiserer data på kart med Mapbox</li>
        </ul>
        Vi forventer ingen forkunnskaper om teknologiene nevnt over, vi
        forventer kun at dere prøver dere frem og spør om dere står fast.
      </div>
      <br />
      <Map
        height={"1000px"}
        width={"1000px"}
        zoom={14}
        longitude={5.3339957}
        latitude={60.3800099}
      >
        <Marker longitude={5.3315857} latitude={60.3809852}>
          <Image
            src="/stacc_icon_red.png"
            width={"30px"}
            height={"30px"}
            className={styles.image}
          />
        </Marker>
      </Map>
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
