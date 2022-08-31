import { getGeodesicDistance } from "./getGeodesicDistance";

// function that finds the latitude and longitude in an array that is closest to the current location
export function getClosestStation(stations, location) {
  let closestStation = stations[0];
  let closestDistance = getGeodesicDistance(
    location.lat,
    location.lon,
    closestStation.lat,
    closestStation.lon
  );
  for (let i = 1; i < stations.length; i++) {
    let distance = getGeodesicDistance(
      location.lat,
      location.lon,
      stations[i].lat,
      stations[i].lon
    );
    if (distance < closestDistance) {
      closestDistance = distance;
      closestStation = stations[i];
    }
  }
  return closestStation;
}

