import { useState } from "react";
import Map from "../../config/Map";
import TLDR from "../TLDR";
import { Marker } from "react-map-gl";
import { getCurrentLocation } from "../../utils/getCurrentLocation";
import { getClosestStation } from "../../utils/getClosestStation";

export default function Task5({ stations = [] }) {
  const [location, setLocation] = useState({ lat: "", lon: "" });

  // Bruk denne funksjonen for å finne din lokasjon
  async function getMyLocation() {
    getCurrentLocation().then(setLocation);
  }

  // Sett den nærmeste stasjonen på denne variabelen
  const closestStation = getClosestStation(stations, location);

  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b> Hent ut din nåværende lokasjon (
          <code>/utils/getCurrentLocation</code>) og bruk den sammen med liste
          over stasjoner for å finne den stasjonen som er nærmest deg (
          <code>/utils/getClosestStation</code> ). Tegn stasjonen på kartet.
        </p>
      </TLDR>
      <button type="button" onClick={getMyLocation}>
        Hent min lokasjon!
      </button>
      <br />
      <br />
      <b>Asynkrone funksjoner: </b>
      <br />
      Asynkronitet betyr at to eller flere ting (f.eks. API-kall) ikke utføres
      samtidig. Dette er en viktig del av programmering, som vi bruker for å
      kunne håndtere situasjoner der man ikke på forhånd vet hvor lang tid noe
      tar. For eksempel, om man skal hente data fra et endepunkt, så vet man
      aldri hvor lang tid det tar før man får dataene man har spurt om.
      <br />
      <br />I slike tilfeller er vi nødt til å definere i koden hvilken
      oppførsel vi ønsker oss. Her kommer ✨<em>asynkrone funksjoner</em>✨ inn.
      Disse er definert med <code>async function</code>. Når man skal bruke en
      asynkron funksjon, må man <em>vente</em> på at den skal bli ferdig før man
      går videre. Dette gjøres ved å bruke <code>then</code>, slik:{" "}
      <code>getSomeDataThatYouHaveToWaitFor().then(setState)</code>
      <br />
      <br />
      For å hente ut plasseringen vår, må vi gjøre et slikt kall der vi ikke vet
      på forhånd hvor lang tid det kommer til å ta.
      <br />
      <br />
      <em>
        Ta i bruk <code>async function getMyLocation</code> i{" "}
        <code>components/tasks/Task4</code> for å finne din posisjon.
      </em>{" "}
      Les mer om asynkrone funksjoner her:{" "}
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">
        MDN
      </a>
      <br />
      <br />
      <b>useState: </b>
      <br />
      useState er en hook (en form for funksjon) som hører med rammeverket
      React. useState tillater oss å lagre data som kan muteres (oppdateres)
      helt til du forlater siden eller refresher.
      <br />
      <br />
      <code>const [theValue, setTheValue] = useState(someInitialValue)</code>
      <br />
      <br />
      useState gir oss to metoder, en som holder verdien (<code>theValue</code>)
      og en som setter verdien (<code>setTheValue</code>). I parantesen på
      slutten finner du verdien som verdien blir initialisert med.
      <br />
      <br />
      Vi har i denne oppgaven definert to useState funksjoner som du kan bruke
      til å lagre din lokasjon og ruten til stasjonen.
      <br />
      <br />
      <Map>
        {/* Passer kordinat state inn i longitude og latitude under */}
        <Marker longitude={closestStation.lon} latitude={closestStation.lat}>
          <img src="/stacc_icon_red.png" width={30} height={30} />
        </Marker>
      </Map>
      <br />
    </div>
  );
}
