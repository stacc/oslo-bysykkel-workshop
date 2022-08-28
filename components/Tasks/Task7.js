import TLDR from "../TLDR";
import DropDown from "../InputFields/DropDown";
import Submit from "../InputFields/Submit";
import styles from "../../styles/Tasks.module.css";
import Image from "next/image";

export default function Task3() {
    const stations = [
        {
            value: "1891",
            label: "Rosenbergsgaten"
        },
        {
            value: "87",
            label: "AdO arena"
        }
    ]
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const {arrivalStand, departureStand} = formProps
        console.log(arrivalStand, departureStand)

    }
    return (
        <div>
            <TLDR >
                <p>
                    <b>Kort fortalt: </b>
                    Bruk elementene du finner i <code>/components/inputFields</code> for å lage et skjema,
                    slik at du kan velge avreise- og ankomststativer, og vis ruten på kartet.
                    Du må prosessere dataen med stasjonene slik at de passer med formatet definert i
                    DropDown-komponentet.
                </p>
            </TLDR>
            <p className={styles.section}>
                I forrige oppgave jobbet vi med å sende inn to stasjoner, og vise ruten imellom på et kart.
                I denne oppgaven skal vi bygge videre på det konseptet - her skal vi bygge frontend som gjør det mulig
                for
                oss å sende inn informasjon, og bruke denne til å vise ruter.
            </p>
            <p className={styles.section}>
                I <code>/components/inputFields</code> finner du to komponenter; en dropdown, og en submit-knapp.
                verdiene som vises i dropdownen kommer inn i choices-objektet
                det må ha denne strukturen:
            </p>
            <code className={styles.section}>
                choices = {JSON.stringify([
                    {
                        value: "1891",
                        label: "Rosenbergsgaten"
                    },
                    {
                        value: "87",
                        label: "AdO arena"
                    }
                ]
            )}
            </code>
            <br/>
            <br/>

            <p className={styles.section}>
                Bruk "station_id" som value, og "name" som label. Her kan det være lurt å bruke en <code>reduce</code> for å hente ut de verdiene du vil ha.
                Har man for eksempel en liste med objekter som ser slik ut:
                <br/>
                <br/>
                <code className={styles.section}>
                    fruits = {JSON.stringify([
                        {
                            id: "apple",
                            name: "Eple",
                            weight: 0.2,
                            color: "red",
                        },
                        {
                            id: "banana",
                            name: "Banan",
                            weight: 0.15,
                            color: "yellow",
                        }
                    ]
                )}
                </code>
                <br/>
                <br/>
                og man ønsker å gjøre dette om til en ny liste, med "name" og "color", der variabelnavnet "color" gjøres om til "characteristic", slik at den ser slik ut:
                <br/>
                <br/>
                <code className={styles.section}>
                    fruits = {JSON.stringify([
                        {
                            name: "Eple",
                            characteristic: "red",
                        },
                        {
                            name: "Banan",
                            characteristic: "yellow",
                        }
                    ]
                )}
                </code>
                <br/>
                <br/>
                kan man gjøre det slik:
            </p>
            <Image
                src="/images/reduce.png"
                width={4000}
                height={1000}
                className={styles.image}
            />
            <p>
                Det en <code>reduce</code>-funksjon gjør, er å loope gjennom en liste, men tillater at du tar med deg en variabel
                gjennom alle iterasjonene, slik at man kan samle opp den informasjonen man vil.
                 <code> previousValue</code> er denne variabelen. Det er viktig å returnere variabelen etter hver iterasjon,
                slik at du kan fortsette å jobbe med den i neste. <code>currentValue</code> er den vanlige verdien man jobber
                med når man looper igjennom et objekt. Det tilsvarer f.eks. <code>book</code> i for of-loopen; <code> for(const book of books) </code>.
            </p>

            <p className={styles.section}>
                Bruk dataen i onSubmit funksjonen over til å vise den valgte strekninge på kartet, ved hjelp av funksjonaliteten
                vi lagde i oppgave 6.

            </p>



            <form className={styles.form} id={"routePlanner"} onSubmit={onSubmit}>
                <DropDown choices={stations} selectName={"arrivalStand"} label={"Velg ankomststasjon"}/>
                <DropDown choices={stations} selectName={"departureStand"} label={"Velg avreisestasjon"}/>
                <Submit form="routePlanner" label={"Finn reise"}/>
            </form>
        </div>
    );
}
