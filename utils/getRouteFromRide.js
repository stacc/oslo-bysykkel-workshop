/**
 * Get the start- and endpoint of the bysykkel api
 * @param {Object} ride - one historical datapoint of a ride with bysykkel
 * @returns Start and end point of the ride
 */
const getRouteFromRide = (ride) => {
  if (ride === null) {
    // TODO - feedback on the task?
    throw Exception("Ride cannot be null or empty");
  }

  if (!ride.start_station_latitude || !ride.start_station_longitude) {
    throw Exception("Ride is missing start station");
  }

  if (!ride.end_station_latitude || !ride.end_station_longitude) {
    throw Exception("Ride is missing end station");
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

export default getRouteFromRide;
