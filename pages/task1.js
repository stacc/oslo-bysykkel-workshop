import styles from "../styles/Home.module.css";

import bysykkelJson from "../data/07.json"
import { useEffect, useState } from "react";

import { getCycleRoute } from "../api/mapbox";

/**
 * Given list of rides from, returns the ride with the longest distance
 * @param {Array} data - Historical data of rides from Bergen Bysykkel api
 * @return ride with the longest distance cycled
 */
const findRideWithLongestDistance = data => {
    // TODO - implement
    return null
    // return data.reduce((longest, ride) => {
    //     if(ride.duration > longest.duration) return ride
    //     return longest
    // }, data.at(0))
}

export default function() {

    const [distanceSegments, setDistanceSegments] = useState([])

    useEffect(() => {
        const asyncCallback = async () => {
            const longestDistance = findRideWithLongestDistance(bysykkelJson)

            if(longestDistance === null) {
                // TODO - feedback on the task?
                return;
            }
    
            const start = {long: longestDistance.start_station_longitude, lat: longestDistance.start_station_latitude}
            const end = {long: longestDistance.end_station_longitude, lat: longestDistance.end_station_latitude}
    
            const route = await getCycleRoute([start, end], {
                format: "geojson"
            });
            console.log("ROUTE", route)
        }
        asyncCallback();
    }, [bysykkelJson])
    // const token = 

  return <div className={styles.container}>Hello world2</div>;
}
