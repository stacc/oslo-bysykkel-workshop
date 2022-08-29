import TLDR from "../TLDR";

export default function Task7({stations}) {
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

    return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b> oppgaveteksten her.
        </p>
      </TLDR>
    </div>
  );
}
