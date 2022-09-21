import TLDR from "../TLDR";
import Submit from "../InputFields/Submit";
import styles from "../../styles/Tasks.module.css";
import Map from "../../config/Map";
import {Layer, Source} from "react-map-gl";
import React, {useState} from "react";
import {getCycleRoute} from "../../api/mapbox";
import {formatStationsForDropdown} from "../../utils/formatStationsForDropdown";
import DropDown from "../InputFields/DropDown";

const Task4 = ({stations}) => {
    const choices = formatStationsForDropdown(stations)
    const [route, setRoute] = useState()

    const onSubmit = async (dataFromForm) => {
        //Her prosesseres dataen slik at den kan brukes
        dataFromForm.preventDefault();
        const formData = new FormData(dataFromForm.target)
        const formProps = Object.fromEntries(formData)

        //hent ut verdiene fra dropdownene under

        //const departureStand = JSON.parse(formProps.???)
        //const arrivalStand = JSON.parse(formProps.???)
        //console.log("➡️departureStand", departureStand, "⬅️arrivalStand", arrivalStand)

        const trip = [
            //avreise
            {},
            //ankomst
            {},
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
                    Bruk dropdown-elementene du finner i <code>/components/InputFields</code> for å fullføre skjemaet i
                    bunnen,
                    slik at du kan velge avreise- og ankomststativer, og vise ruten på kartet.
                    Du må prosessere dataene returnert fra skjemaet slik at det passer med formatet kartet trenger.
                </p>
            </TLDR>
            <p className={styles.section}>
                I forrige oppgave jobbet vi med å lage en dropdown-liste med alle de tilgjengelige stativene. I denne
                oppgaven skal vi videre med dette elementet - slik at du
                kan velge stasjoner fra to lister, og vise ruta mellom de på kartet.
            </p>
            <p className={styles.section}>
                For å vise ruta på kartet, må vi vite hvor vi skal fra, og hvor vi skal til. Vi
                bruker <code>geoJson</code> (et dataformat som viser enkle geografiske strukturer)
                og <code>getCycleRoute</code> (en funksjon vi har skrevet som bruker et endepunkt fra mapBox for å
                kalkulerer sykkelruter), og henter input fra bruker gjennom
                dropdown-komponenter.
            </p>
            <b>Å bruke komponenter</b>
            <div className={styles.section}>
                I React bruker vi <em>komponenter</em>, som er biter med kode som kan gjenbrukes.
                <br/>
                <br/>
                For å bruke komponenter, må de først importeres. Det ser vanligvis slik ut:
                <br/>
                <code>import Apple from "../../fruits";</code>
                Når komponentet er importert, kan det brukes i return-funksjonen:
                <br/>
                <br/>
                <code>return(
                    <br/>
                    &lt;Apple/&gt;
                    <br/>
                    )</code>
                <br/>
                <br/>
                Et komponent kan også ta inn data, på samme måte som en funksjon. Man kaller
                dette <em>props</em>. Om  &lt;Apple/&gt;-komponentet for eksempel tar inn props for vekt og farge,
                ville det sett slik ut:
                <br/>
                <br/>
                <code>return(
                    <br/>
                    &lt;Apple weight=&#123;0.5&#125; color=&#123;"red"&#125;/&gt;
                    <br/>
                    )</code>
            </div>

            <div className={styles.tasks}>

            <b>Oppgaver</b>
            <ul className={styles.listWithIcons}>
                <li>
                    Åpne <code>components/tasks/Task4.js</code>
                </li>
                <li>
                    Importer <code>DropDown.js</code> og legg til to dropdownlister i <code>form</code>-elementet under.
                    Den ene skal representere <em>avreisestativer</em>,
                    det andre skal representere <em>ankomststativer</em>. Du finner dropdownkomponentet
                    i <code>/components/inputFields/</code>. Se på hva dropdown-komponentet
                    trenger for å fungere, og pass på å få det med som props.
                </li>
                <li>
                    Når "Finn reise"-knappen trykkes, blir <code>onSubmit</code>-funksjonen trigget.
                    Denne funksjonen får inn resultatet fra formet.
                    Få <em>console.log()</em>-funksjonen på linje 24 til å logge ut avreise- og ankomststativene.
                </li>
                <li>
                    Hent ut <code>lon</code> og <code>lat</code> fra <em>departureStand</em> og <em>arrivalStand</em> og
                    fyll dem inn i <em>trip</em>-lista. Her trenger vi to objekter; et for avreise, og et for ankomst.
                    Objektene skal ha to <em>key-value</em>-par, med key: <code>long</code> og <code>lat</code>.
                </li>
                <li>
                   Har du gjort alt rett, vil du nå se et kart med en sykkelrute under! 🎉
                </li>
            </ul>
            </div>

            <p className={styles.section}>Hvor skal vi reise?</p>
            <form className={styles.form} id={"routePlanner"} onSubmit={onSubmit}>
                {/*Legg til dropdowns her :)*/}
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

export default Task4