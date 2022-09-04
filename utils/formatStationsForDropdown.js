//This function parses the "station" endpoint: station_information.json
//and returns it formatted for dropdown
export function formatStationsForDropdown(stations) {
    let parsedStations = []
    if(stations.length > 0){
        parsedStations = JSON.parse(stations)
    }

    const choices = parsedStations.map(e => {
        return {
            label: e.name,
            value: JSON.stringify(e)
        }
    })

    return choices;
}
