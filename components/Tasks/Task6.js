import TLDR from "../TLDR";
import bysykkelJson from "../../data/06.json";
import { useEffect, useState } from "react";
import { getCycleRoute } from "../../api/mapbox";
import getRouteFromRide from "../../utils/getRouteFromRide";
import findRidesWithLongestDistance from "../../utils/findRidesWithLongestDistance";
import { MapRouteList } from "../MapRouteList";
import { getGeodesicDistance } from "../../utils/getGeodesicDistance";
import styles from "../../styles/Tasks.module.css";

function getUniqueRides(rides) {
  const uniqueRides = {};
  rides.forEach((ride) => {
    const key = `${ride.start_station_id}-${ride.end_station_id}`;
    if (!uniqueRides[key]) {
      uniqueRides[key] = ride;
    }
  });
  return Object.values(uniqueRides);
}

const precomputeDistances = (data) => {
  const rides = getUniqueRides(data);
  return rides.map((x) => ({
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

export default function Task6() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const asyncCallback = async () => {
      let rides = findRidesWithLongestDistance(precomputedBysykkelJson);

      if (!rides) {
        return;
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
          (Tips: Se i <code>utils/findRideWithLongestDistance.js</code>)
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
        <code>03.json</code>, etc. Hver fil samsvarer med en måned i 2022/2023.
        Alle disse filene inneholder tonnevis med tekst. Bak denne skjuler det
        seg lister over ulike sykkelturer som er gjort med Bysykler. Her er et
        utdrag av en av turene:
        <br />
        <br />
        <code>
          {"{"}
          <br />
          "started_at": "2023-01-01 05:45:40.335000+00:00",
          <br />
          "ended_at": "2023-01-01 05:51:25.149000+00:00",
          <br />
          "duration": 344,
          <br />
          "start_station_id": "499",
          <br />
          "start_station_name": "Bjerregaards gate",
          <br />
          "start_station_description": "Ovenfor Fredrikke Qvams gate",
          <br />
          "start_station_latitude": 59.925488,
          <br />
          "start_station_longitude": 10.746058,
          <br />
          "end_station_id": "423",
          <br />
          "end_station_name": "Schous plass",
          <br />
          "end_station_description": "Nærmest rundkjøringen",
          <br />
          "end_station_latitude": 59.920335,
          <br />
          "end_station_longitude": 10.760804
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
        <br />I filen <code>findRideWithLongestDistance.js</code> skal du
        implementere funksjonen for å beregne topp ti lengste sykkeldistanse
        mellom start- og sluttstoppet, slik at det vises på kartet dersom det
        implementeres korrekt.
        <em>Fikser du det? </em>
        <br />
        <br />
      </div>

      <div className={styles.tasks}>
        <b>Oppgaver</b>
        <ul className={styles.listWithIconsPin}>
          <li>Hent ut de lengste turene fra historisk data fra Bysykkel.</li>
          <li>
            (Tips: Se i <code>utils/findRideWithLongestDistance.js</code>)
          </li>
          <li>Sjekk ut .sort() funksjonen</li>
        </ul>
      </div>
    </div>
  );
}
