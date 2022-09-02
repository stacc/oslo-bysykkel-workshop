// function that calculates the geodesic distance between two points
export function getGeodesicDistance(lat1, long1, lat2, long2) {
  lat1 = parseFloat(lat1);
  long1 = parseFloat(long1);
  lat2 = parseFloat(lat2);
  long2 = parseFloat(long2);
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((long2 - long1) * Math.PI) / 180;

  return Math.acos(
    Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  );
}
