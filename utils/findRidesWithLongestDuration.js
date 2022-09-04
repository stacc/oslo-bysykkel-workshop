/**
 * Given list of rides from, returns the ride / rides with the longest duration
 * @param {Array} data - Historical data of rides from Bergen Bysykkel api
 * @return ride with the longest duration cycled
 */
const findRidesWithLongestDuration = (data) => {
  // TODO - implement properly
  const longestRides = data.sort((a, b ) => b.distance - a.distance).slice(0, 10)
  return longestRides
  // return data.at(0)
};

export default findRidesWithLongestDuration;
