import TLDR from "../TLDR";
import Submit from "../InputFields/Submit";
import styles from "../../styles/Tasks.module.css";
import Map from "../../config/Map";
import {Layer, Source} from "react-map-gl";
import React, {useState} from "react";
import {getCycleRoute} from "../../api/mapbox";
import {formatStationsForDropdown} from "../../utils/formatStationsForDropdown";
import DropDown from "../InputFields/DropDown";

const Task6 = ({stations}) => {
    const choices = formatStationsForDropdown(stations)
    const [route, setRoute] = useState()

    const onSubmit = async (dataFromForm) => {
        //Her prosesseres dataen slik at den kan brukes
        dataFromForm.preventDefault();
        const formData = new FormData(dataFromForm.target)
        const formProps = Object.fromEntries(formData)

        //hent ut verdiene fra dropdownene under

        const departureStand = JSON.parse(formProps.departureStand)
        const arrivalStand = JSON.parse(formProps.arrivalStand)
        console.log("➡️departureStand", departureStand, "⬅️arrivalStand", arrivalStand)

        const trip = [
            //avreise
            {
                long: departureStand.lon,
                lat: departureStand.lat
            },
            //ankomst
            {
                long: arrivalStand.lon,
                lat: arrivalStand.lat
            },
        ]

        const geoJson = await getCycleRoute(trip, {
            format: "geojson",
        });
        setRoute(geoJson)
    }

    return (
        <div>
            <TLDR>
                <p>
                    <b>Kort fortalt: </b>
                    Bruk elementene du finner i <code>/components/InputFields</code> for å lage et skjema,
                    slik at du kan velge avreise- og ankomststativer, og vis ruten på kartet.
                    Du må prosessere dataene returnert fra skjemaet slik at det passer med formatet kartet trenger.
                </p>
            </TLDR>
            <p className={styles.section}>
                I oppgave 3 og oppgave 5, jobbet vi med på vise ruten mellom to ulike stativene, og å lage en
                dropdown-liste
                med alle de tilgjengelige stativene. I denne oppgaven skal vi koble disse elementene sammen - slik at du
                kan velge stasjoner fra to lister, og vise ruta mellom de på kartet.
            </p>
            <p className={styles.section}>
                For å vise ruta på kartet, må vi vite hvor vi skal fra, og hvor vi skal til. Vi
                bruker <code>geoJson</code>
                og <code>getCycleRoute</code> som vi har brukt tidligere, og henter input fra bruker gjennom
                dropdown-komponenter.
            </p>
            <ol className={styles.section}>
                <li>
                    Åpne <code>components/tasks/Task6.js</code>
                </li>
                <li>
                    Importer <code>DropDown.js</code> og legg til to dropdownlister i <code>form</code>-elementet under.
                    Den ene skal representere <em>avreisestativer</em>,
                    det andre skal representere <em>ankomststativer</em>. Du finner dropdownkomponentet
                    i <code>/components/inputFields/</code>. Kikk på hva dropdown-komponentet
                    trenger for å fungere, og pass på å få det med som props.
                </li>
                <li>
                    Som du ser, så har form-komponentet en funksjon som kjører på <code>onSubmit</code>,
                    nemlig <code>onSubmit</code>.
                    Denne funksjonen får inn resultatet fra formet, når den blir trigget gjennom "Finn reise"-knappen.
                    Få <em>console.log()</em>-funksjonen på linje 24 til å logge ut avreise- og ankomststativene.
                </li>
                <li>
                    Hent ut <code>lon</code> og <code>lat</code> fra <em>departureStand</em> og <em>arrivalStand</em> og
                    fyll dem inn i <em>trip</em>-lista. Her trenger vi to objekter; et for avreise, og et for ankomst.
                    Objektene skal ha to <em>key-value</em>-par, med key: <code>long</code> og <code>lat</code>.
                </li>
            </ol>

            <p className={styles.section}>Hvor skal vi reise?</p>
            <form className={styles.form} id={"routePlanner"} onSubmit={onSubmit}>
                {/*Legg til dropdowns her :)*/}
                <DropDown choices={choices} label={"Avreisestativ"} name={"departureStand"}/>
                <DropDown choices={choices} label={"Ankomststativ"} name={"arrivalStand"}/>
                <Submit form="routePlanner" label={"Finn reise"}/>

            </form>
            {route?.routes?.map((element, i) => (
                <Map key={i}>
                    <Source type="geojson" data={element?.geometry}>
                        <Layer
                            type="line"
                            paint={{
                                "line-color": "pink",
                                "line-width": 2,
                            }}
                        />
                    </Source>
                </Map>
            ))
            }
        </div>
    );
}

export default Task6