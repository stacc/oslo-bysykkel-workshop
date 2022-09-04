import TLDR from "../TLDR";
import DropDown from "../InputFields/DropDown";
import Submit from "../InputFields/Submit";
import styles from "../../styles/Tasks.module.css";
import Map from "../../config/Map";
import {Layer, Source} from "react-map-gl";
import React, { useState} from "react";
import {getCycleRoute} from "../../api/mapbox";


export function isCompleted() {
    return false
}

const Task6 = ({stations}) => {
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


    const [route, setRoute] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)

        const departureStand = JSON.parse(formProps.departureStand)
        const arrivalStand = JSON.parse(formProps.arrivalStand)

        const geoJson = await getCycleRoute([
            departureStand.lon,
            departureStand.lat,
            arrivalStand.lon,
            arrivalStand.lat
        ], {
            format: "geojson",
        });


        setRoute(geoJson)
    }

    return (
        <div>
            <TLDR>
                <p>
                    <b>Kort fortalt: </b>
                    Bruk elementene du finner i <code>/components/inputFields</code> for å lage et skjema,
                    slik at du kan velge avreise- og ankomststativer, og vis ruten på kartet.
                    Du må prosessere dataen med stasjonene slik at de passer med formatet definert i
                    DropDown-komponentet.
                </p>
            </TLDR>
            <p className={styles.section}>
                I de to siste oppgavene, jobbet vi med på vise ruten mellom to ulike stativene, og å lage en
                dropdown-liste
                med alle de tilgjengelige stativene. I denne oppgaven skal vi koble disse elementene sammen - slik at du
                kan velge stasjoner fra to lister, og vise ruta mellom de på kartet.
            </p>

            <form className={styles.form} id={"routePlanner"} onSubmit={onSubmit}>
                <DropDown choices={choices} selectName={"arrivalStand"} label={"Velg ankomststasjon"}/>
                <DropDown choices={choices} selectName={"departureStand"} label={"Velg avreisestasjon"}/>
                <Submit form="routePlanner" label={"Finn reise"}/>
            </form>
            <Map>
                <Source type="geojson" data={route}>
                    <Layer
                        type="line"
                        layout={{
                            visibility: "visible",
                            "line-cap": "round",
                            "line-join": "round",
                        }}
                        paint={{
                            "line-color": "green",
                            "line-width": 4,
                            "line-opacity": 0.75,
                        }}
                    />
                </Source>
            </Map>
        </div>
    );
}

export default Task6