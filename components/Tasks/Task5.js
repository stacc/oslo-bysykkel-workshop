import { useState } from "react";
import { getClosestStation } from "../../utils/getClosestStation";
import { getCurrentLocation } from "../../utils/getCurrentLocation";
import TLDR from "../TLDR";

export default function Task5({ nr, tasksLength, stations }) {
  const [location, setLocation] = useState({ lat: "", lon: "" });

  async function getMyLocation() {
    await getCurrentLocation()
      .then((location) => setLocation(location))
      .catch((err) => console.error(err));
  }

  const closestStation = getClosestStation(JSON.parse(stations), location);
  console.log(closestStation);

  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b> Hent ut din nåværende lokasjon (hint: vi har
          laget en hjelpefunksjon for dette) og bruk den sammen med APIet for å
          finne ut hvor den nærmeste bysykkel stasjonen er.
        </p>
      </TLDR>
      <br />
      <button type="button" onClick={getMyLocation}>
        Hent min lokasjon
      </button>
    </div>
  );
}
