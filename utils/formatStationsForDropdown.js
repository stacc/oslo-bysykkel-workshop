//This function parses the "station" endpoint: station_information.json
//and returns it formatted for dropdown
export function formatStationsForDropdown(stations) {
  const choices = stations.map((e) => {
    return {
      label: e.name,
      value: JSON.stringify(e),
    };
  });

  return choices;
}
