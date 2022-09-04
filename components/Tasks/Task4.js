import { useState } from "react";
import Map from "../../config/Map";
import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";
import { Marker, Source, Layer } from "react-map-gl";

export default function Task5({ stations }) {
  const [location, setLocation] = useState({ lat: "", long: "" });
  const [route, setRoute] = useState([]);

  // Bruk denne funksjonen for å finne din lokasjon
  async function getMyLocation() {}

  // Sett den nærmeste stasjonen på denne variabelen
  const closestStation = "???";

  // Bruk denne funksjonen for å finne en rute mellom to stasjoner
  async function getRoute() {}

  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b> Hent ut din nåværende lokasjon (hint: vi har
          laget en hjelpefunksjon for dette) og bruk den sammen med liste over
          stasjoner for å finne den stasjonen som er nærmest deg (Vi har også
          laget en hjelpefunksjon for dette ;) ). Tegn stasjonen på kartet.
        </p>
      </TLDR>
      <br />
      <b>Asynkrone funksjoner: </b>
      <br />
      Asynkronitet betyr at to eller flere ting (f.eks. API-kall) ikke blir
      kjørt samtidig. Dette er en viktig del av programmering for å kunne
      håndtere situasjoner når en ikke helt vet når de kjøres eller blir
      fullført. Vi er nødt til å bruke asynkrone funksjoner (definert med{" "}
      <code>async function</code>) for å både ut lokasjonen vår. Kan du ta i
      bruk <code>async function getMyLocation</code> i{" "}
      <code>components/tasks/Task4</code> for å finne din posisjon? Les mer om
      asynkrone funksjoner her:{" "}
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">
        MDN
      </a>
      <br />
      <br />
      <b>useState: </b>
      <br />
      Det andre konseptet vi bør kunne nå er en funksjon som kalles useState og
      som kommer fra React. useState tillater oss å lagre data som kan muteres
      (oppdateres) helt til du forlater siden eller refresher. useState gir oss
      to metoder, en som setter verdien (<code>setLocation</code>) og en som
      henter verdien (<code>location</code>) Vi har i denne oppgaven definert to
      useState funksjoner som du kan bruke til å lagre din lokasjon og ruten til
      stasjonen.
      <br />
      <br />
      <Map>
        {/* Kommenter ut koden under for å plassere en markør på kartet */}
        {/* <Marker longitude={"FYLL INN"} latitude={"FYLL INN"}>
          <div>Her er du!</div>
        </Marker> */}

        {/* Kommenter ut koden under for å tegne en rute på kartet */}
        {/* <Source id={`1`} type="geojson" data={route?.routes?.[0]?.geometry}>
          <Layer
            type="line"
            layout={{
              visibility: "visible",
              "line-cap": "round",
              "line-join": "round",
            }}
            paint={{
              "line-color": `rgb(174, 54, 44)`,
              "line-width": 4,
              "line-opacity": 1,
            }}
          />
        </Source> */}
      </Map>
      <br />
      <TLDR>
        <ul className={styles.list}>
          <li>
            <b>Valgfrie oppgaver:</b>
          </li>
          <li>
            1. Bruke hjelpefunksjonen <code>getPedestrianRoute</code> i{" "}
            <code>/api/mapbox.js</code> for å tegne den raskeste ruten mellom
            deg og stasjonen du er nærmest.
          </li>
          <li>2. Lag din egen markør som du kan plassere på kartet.</li>
        </ul>
      </TLDR>
    </div>
  );
}
