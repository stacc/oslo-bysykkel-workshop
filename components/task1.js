import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import bysykkelJson from "../data/07.json";
import { useCallback, useEffect, useRef, useState } from "react";
import { getCycleRoute } from "../api/mapbox";
import { Layer, Source } from "react-map-gl";
import Map from "../config/Map";
import ReactCanvasConfetti from "react-canvas-confetti";

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
  return data.reduce((longest, ride) => {
    if(ride.duration > longest.duration) return ride
    return longest
}, data.at(0))
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

function getAnimationSettings() {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: Math.random() - 0.2,
        y: Math.random() - 0.2
      }
    };
  }
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

export default function () {
  const [distanceSegments, setDistanceSegments] = useState([]);
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

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
      if (ride.duration === longestDuration && refAnimationInstance.current) {
        let counter = 0;
        let intervalId = setInterval(() => {
            refAnimationInstance.current(getAnimationSettings());
            refAnimationInstance.current(getAnimationSettings());

            if(counter++ >= 5) {
                clearInterval(intervalId)
            }

        }, 250)
      }
    window.sessionStorage.setItem("CompletedTask1", true)
    };
    asyncCallback();
  }, [bysykkelJson]);

  return (
    <div className={styles.container}>
    </div>
  );
}
