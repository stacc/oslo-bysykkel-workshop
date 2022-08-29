import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";
import React from "react";
import bysykkelJson from "../../data/07.json";
import { useEffect, useState } from "react";
import { getCycleRoute } from "../../api/mapbox";
import { Layer, Source } from "react-map-gl";
import Map from "../../config/Map";
import getRouteFromRide from "../../utils/getRouteFromRide";
import findRideWithLongestDuration from "../../utils/findRideWithLongestDuration";

export function isCompleted() {
  const longestDuration = Math.max(...bysykkelJson.map((x) => x.duration));
  const ride = findRideWithLongestDuration(bysykkelJson);

  try {
    // Ensure the ride is valid
    getRouteFromRide(ride);
  } catch (e) {
    return false;
  }

  return longestDuration === ride?.duration;
}

export default function Task3() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const asyncCallback = async () => {
      let rides = findRideWithLongestDuration(bysykkelJson);

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
            return route.routes[0].geometry;
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
          <b>Kort fortalt: </b> Basert på den historsike dataen til bysykkel,
          hent ut den turen som har varte lengst. <br/>(Tips: Se i{" "}
          <code>utils/findRideWithLongestDuration.js</code>)
        </p>
      </TLDR>
      <Map>
        {routes.map((route, key) => (
          <>
            <Source key={key} id={`${key}_route`} type="geojson" data={route}>
              <Layer
                type="line"
                layout={{
                  visibility: "visible",
                  "line-cap": "round",
                  "line-join": "round",
                }}
                paint={{
                  "line-color": `hsl(${
                    (key / routes.length) * 360
                  }deg,50%,50%)`,
                  "line-width": 4,
                  "line-opacity": 0.75,
                }}
              />
            </Source>
          </>
        ))}
      </Map>
      <b>Beskrivelse:</b>
      <div>
        For å starte så kan vi se litt på hva muligheter bysykkel api-et
        har å by på. Vi har hentet ut et par historiske datasett som man kan
        bruke for å leke litt med. Her har vi laget en side som kan ta en
        sykkeltur og vise raskeste sykkelvei mellom start og slutt av den
        sykkelturen. (NB: Dette er ikke nødvendigvis ruten noen har tatt, men er
        en beregnet rute mellom start og sluttstoppet.)
        <br />
        <br /> Dersom man ser i datamappen så har vi ulike jsonfiler som heter
        01.json, 02.json, 03.json, etc. Hver fil samsvarer med en måned i 2022.
        Om dere ser i en av disse filene så vil dere nok se tonnevis med tekst.
        Dette er egentlig en liste med ulike sykkelturer som er gjort med
        bysykkel. Her er et utdrag av en av turene:
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
        Listen inneholder hundrevis av turer, så er litt vanskelig å forstå med
        en helhet, men individuelt er det ganske lett å se hva informasjon hver
        tur har. Her ser vi når turen startet, når den slutet, hvor lenge den
        varte (i sekunder), informasjon om start stasjonen (navn, hvor den er,
        etc) og sluttstasjonen.
        <br />
        <br /> Fra dataen ser vi at vi har allerede lengdegraden og breddegraden (de
        geografiske koordinatene) allerede. På toppen har vi allerede laget et kart
        som kan brukes til å vise reisen, vi har også laget koden som tar en til ti av
        turene og beregner korteste sykkeldistanse mellom start og slutt stoppet
        og viser det på et kart, men det mangler beregning på hvordan å hente ut
        turen med lengst varighet. Har du mulighet til å bistå?
        <br />
        <br />
      </div>

      <TLDR>
        <div className={styles.list}>
          <b>Valgfrie oppgaver:</b>
          <div>
            1. Prøv å endre datasettet som er brukt ved å endre import i toppen av{" "}
            <code>components/Tasks/Task3.js</code> og se om det påvirker turen.
          </div>
          <div>
            2. Prøv å legge til støtte for å hente ut de top 10 lengste turene
          </div>
          <div>
            3. Prøv å finne ut hva som er dei 10 mest populære turene.
          </div>
        </div>
      </TLDR>
    </div>
  );
}
