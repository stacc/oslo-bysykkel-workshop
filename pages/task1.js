import styles from "../styles/Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import bysykkelJson from "../data/07.json";
import { useEffect, useState } from "react";
import { getCycleRoute } from "../api/mapbox";
import { Layer, Source } from "react-map-gl";
import Map from "../config/Map";

/**
 * getStaticProps allows us to send properties about the page to a more generic layout file
 * Check Layout/index.js to see how the properties are used to display the title
 * @returns properties for the page
 */
export async function getStaticProps() {
  return {
    props: {
      pageTitle: "Lengste tid sykla?",
    },
  };
}

/**
 * Given list of rides from, returns the ride with the longest duration
 * @param {Array} data - Historical data of rides from Bergen Bysykkel api
 * @return ride with the longest duration cycled
 */
const findRideWithLongestDuration = (data) => {
  // TODO - implement properly
  return data.at(0);
};

/**
 * Get the start- and endpoint of the bysykkel api
 * @param {Object} ride - one historical datapoint of a ride with bysykkel
 * @returns Start and end point of the ride
 */
const getRouteFromRide = (ride) => {
  if (ride === null /* || ride.duration !== longestDuration*/) {
    // TODO - feedback on the task?
    throw Exception("Ride cannot be null or empty");
  }

  const start = {
    long: ride.start_station_longitude,
    lat: ride.start_station_latitude,
  };

  const end = {
    long: ride.end_station_longitude,
    lat: ride.end_station_latitude,
  };

  return [start, end];
};

export default function () {
  const [distanceSegments, setDistanceSegments] = useState([]);

  useEffect(() => {
    const asyncCallback = async () => {
      const longestDuration = Math.max(...bysykkelJson.map((x) => x.duration));
      const ride = findRideWithLongestDuration(bysykkelJson);

      const bikeRoute = getRouteFromRide(ride);
      const route = await getCycleRoute(bikeRoute, {
        format: "geojson",
      });
      setDistanceSegments(route.routes[0].geometry);
      console.log(
        "ROUTE",
        route.routes[0].geometry,
        longestDuration,
        ride.duration
      );
    };
    asyncCallback();
  }, [bysykkelJson]);

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        For å starte ballen litt og se litt på hva muligheter bysykkel api-et
        har å by på, så har vi hentet ut et par historiske datasett som man kan
        bruke for å leke litt med. Her har vi laget en side som kan ta en
        sykkeltur og vise raskeste sykkelvei mellom start og slutt av den
        sykkelturen. (NB: Dette er ikke nødvendigvis ruten noen har tatt, men er
        en beregnet rute mellom start og sluttstoppet.)<br/><br/> Dersom man ser i
        datamappen så har vi ulike jsonfiler som heter 01, 02, 03, etc. Dette
        samsvarer med en måned i 2022 som der hentet ut. Om dere ser i en av
        disse filene så vil dere nok se tonnevis med tekst. Dette er egentlig en
        liste med ulike sykkelturer som er gjort med bysykkel. Her er en av
        turene:<br/><br/>
        <code>
          {"{"}<br/>
            "started_at": "2022-01-01 04:01:22.287000+00:00",<br/>
            "ended_at": "2022-01-01 04:19:41.611000+00:00",<br/>
            "duration": 1099,<br/>
            "start_station_id": "33",<br/>
            "start_station_name": "Høgskulen på Vestlandet",<br/>
            "start_station_description": "Ved hovedinngang til skolen",<br/>
            "start_station_latitude": 60.369179844976586,<br/>
            "start_station_longitude": 5.349443793165847,<br/>
            "end_station_id": "132",<br/>
            "end_station_name": "Nøstetorget",<br/>
            "end_station_description": "Sukkerhusbryggen",<br/>
            "end_station_latitude": 60.39222475946063,<br/>
            "end_station_longitude": 5.314881116119068<br/>
          {"}"}
        </code><br/><br/>
        Listen inneholder hundrevis av turer, så er litt vanskelig å forstå med
        en helhet, men individuelt er det ganske lett å se hva informasjon hver
        tur har. Her ser vi når turen startet, når den slutet, hvor lenge den
        varte ( i sekunder ), informasjon om start stasjonen (navn, hvor den er,
        etc) og sluttstasjonen.<br/><br/> Fra dataen ser vi at vi har allerede latitiden
        og longituden (de geografiske koordinatene) allerede. Under har vi
        allerede laget et kart som kan brukes til å vise reisen, vi har også
        laget koden som tar en av turene og beregner korteste sykkeldistanse
        mellom start og slutt stoppet og viser det på et kart, men det mangler
        beregning på hvordan å hente ut turen med lengst varighet. Har du
        mulighet til å bistå?<br/><br/>
      </div>
      <Map>
        <Source type="geojson" data={distanceSegments}>
          <Layer
            type="line"
            layout={{
              visibility: "visible",
              "line-cap": "round",
              "line-join": "round",
            }}
            paint={{
              "line-color": "rgb(174,54,44)",
              "line-width": 4,
            }}
          />
        </Source>
      </Map>
    </div>
  );
}
