// function that finds the latitude and longitude in an array that is closest to the current location
export function getClosestStation(stations, location) {
  let closestStation = stations[0];
  let closestDistance = getDistance(
    location.lat,
    location.lon,
    closestStation.lat,
    closestStation.lon
  );
  for (let i = 1; i < stations.length; i++) {
    let distance = getDistance(
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

// function that calculates the distance between two points
function getDistance(lat1, lon1, lat2, lon2) {
  lat1 = parseFloat(lat1);
  lon1 = parseFloat(lon1);
  lat2 = parseFloat(lat2);
  lon2 = parseFloat(lon2);
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  return Math.acos(
    Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  );
}
