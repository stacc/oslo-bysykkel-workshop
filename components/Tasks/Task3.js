import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";
import bysykkelJson from "../../data/06.json";
import { useEffect, useState } from "react";
import { getCycleRoute } from "../../api/mapbox";
import getRouteFromRide from "../../utils/getRouteFromRide";
import findRidesWithLongestDuration from "../../utils/findRidesWithLongestDuration";
import { MapRouteList } from "../MapRouteList";
import { getGeodesicDistance } from "../../utils/getGeodesicDistance";

const precomputeDistances = (data) => {
  return data.map((x) => ({
    ...x,
    distance: getGeodesicDistance(
      x.start_station_latitude,
      x.start_station_longitude,
      x.end_station_latitude,
      x.end_station_longitude
    ),
  }));
};

let precomputedBysykkelJson = precomputeDistances(bysykkelJson);

export function isCompleted() {
  const longestDuration = bysykkelJson
    .map((x) => x.duration)
    .sort((a, b) => b - a)
    .slice(0, 10);
  let rides = findRidesWithLongestDuration(precomputedBysykkelJson);
  if (!rides?.length) {
    rides = [rides];
  }

  try {
    // Ensure the rides are valid
    rides.map((x) => getRouteFromRide(x));
  } catch (e) {
    return false;
  }

  return rides.every((ride, i) => ride.duration === longestDuration[i]);
}

export default function Task3() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const asyncCallback = async () => {
      let rides = findRidesWithLongestDuration(precomputedBysykkelJson);

      if (!rides) {
        throw Error("findRidesWithLongestDuration returned nothing");
      }

      // Allow return of one or more rides
      if (!rides.length) {
        rides = [rides];
      }

      // To not spam the mapbox api
      if (rides.length > 10) {
        throw Error(
          "Due to api limitations can we not draw more than 10 routes at a time"
        );
      }

      // Compute the estimated direct cycle route from a ride
      setRoutes(
        await Promise.all(
          rides.map(async (ride) => {
            const bikeRoute = getRouteFromRide(ride);
            const route = await getCycleRoute(bikeRoute, {
              format: "geojson",
            });
            return { ...ride, geometry: route.routes[0].geometry };
          })
        )
      );
    };
    asyncCallback();
  }, [bysykkelJson]);

  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Hent ut de lengste turene fra historisk data fra
          Bysykkel. <br />
          (Tips: Se i <code>utils/findRideWithLongestDuration.js</code>)
        </p>
      </TLDR>
      <MapRouteList routes={routes} />
      <b>Beskrivelse:</b>
      <div>
        Til å begynne med, har vi hentet ut et par historiske datasett som vi
        kan leke oss litt med. Her har vi laget en side som tar en sykkelrute,
        og viser raskeste vei fra A til B. (NB: Dette er ikke en faktisk rute,
        men er en beregnet rute mellom start- og sluttstoppet.)
        <br />
        <br /> Dersom man ser i mappen <code>data</code> så har vi et sett med
        filer, som heter <code>01.json</code>, <code>02.json</code>,{" "}
        <code>03.json</code>, etc. Hver fil samsvarer med en måned i 2022. Alle
        disse filene inneholder tonnevis med tekst. Om dere ser i en av disse
        filene så vil dere se tonnevis med tekst. Bak denne skjuler det seg
        lister over ulike sykkelturer som er gjort med Bysykler. Her er et
        utdrag av en av turene:
        <br />
        <br />
        <code>
          {"{"}
          <br />
          "started_at": "2022-01-01 04:01:22.287000+00:00",
          <br />
          "ended_at": "2022-01-01 04:19:41.611000+00:00",
          <br />
          "duration": 1099,
          <br />
          "start_station_id": "33",
          <br />
          "start_station_name": "Høgskulen på Vestlandet",
          <br />
          "start_station_description": "Ved hovedinngang til skolen",
          <br />
          "start_station_latitude": 60.369179844976586,
          <br />
          "start_station_longitude": 5.349443793165847,
          <br />
          "end_station_id": "132",
          <br />
          "end_station_name": "Nøstetorget",
          <br />
          "end_station_description": "Sukkerhusbryggen",
          <br />
          "end_station_latitude": 60.39222475946063,
          <br />
          "end_station_longitude": 5.314881116119068
          <br />
          {"}"}
        </code>
        <br />
        <br />
        Her ser vi når turen startet, når den sluttet, hvor lenge den varte (i
        sekunder), informasjon om start-stativet (navn, hvor den er, etc) og
        sluttstativet.
        <br />
        <br />
        Når dataen blir hentet ut så legger vi manuelt til en egen property{" "}
        <code>distance</code>, dette er distansen mellom start- og sluttstativet
        og kan brukes til å estimere distansen som ble syklet. Du kan se på
        linje 11 i koden, funksjonen <code>precomputeDistances</code>, som
        legger til dette feltet.
        <br />
        <br />I dataen har vi allerede <em>lengdegraden</em> og{" "}
        <em>breddegraden</em> (de geografiske koordinatene).
        <br />
        <br />I filen <code>findRideWithLongestDuration.js</code> skal du
        implementere funksjonen for å beregne topp ti lengste sykkeldistanse
        mellom start- og sluttstoppet, slik at det vises på kartet dersom det
        implementeres korrekt.
        <em>Fikser du det? </em>
        <br />
        <br />
      </div>

      <TLDR>
        <div className={styles.list}>
          <b>Valgfrie oppgaver:</b>
          <div>
            1. Prøv å endre datasettet som er brukt ved å endre import i toppen
            av <code>components/Tasks/Task3.js</code> og se om det påvirker
            turen.
          </div>
          <div>
            2. Prøv å legge til støtte for å hente ut de top 10 lengste turene
          </div>
          <div>3. Prøv å finne ut hva som er dei 10 mest populære turene.</div>
        </div>
      </TLDR>
    </div>
  );
}
