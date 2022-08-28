/**
 * Given list of rides from, returns the ride / rides with the longest duration
 * @param {Array} data - Historical data of rides from Bergen Bysykkel api
 * @return ride with the longest duration cycled
 */
const findRideWithLongestDuration = (data) => {
  // TODO - Find the longest ride in the dataset
  // return data.reduce((longest, ride) => {
  //   if (ride.duration > longest.duration) return ride;
  //   return longest;
  // }, data.at(0));
  // return data.slice(10, 20);
  
  return data.at(0)
};

export default findRideWithLongestDuration;
