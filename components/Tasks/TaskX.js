import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";

export default function TaskX() {
    return (
        <div>
            <TLDR>
                <p>
                    <b>Kort fortalt: </b>Du har nå gjort ferdig alle oppgavene vi har
                    forbedret, Gratulerer! Hvis du ønsker kan du nå utvide appen slik som
                    du ønsker.
                </p>
            </TLDR>
            <br/>
            <b>Du kan for eksempel gjøre:</b>

            <TLDR>
                <ul className={styles.list}>
                    <li>🚲 Lag din egen markør som du kan plassere på et fornuftig sted på forsiden.</li>
                    <li>
                        🚲 I <em>task 5</em> bruk hjelpefunksjonen <code>getPedestrianRoute</code> i{" "}
                        <code>/api/mapbox.js</code> for å tegne den raskeste ruten mellom
                        deg og stasjonen du er nærmest.
                    </li>
                    <li>
                        🚲 Bruk Mapbox API endepunktene for å kalkulere en sykkel- og en gårute for å se hvilket
                        alternativ som er raskest.
                    </li>
                    <li>
                        🚲 I <em>task 6</em> Prøv å endre datasettet som er brukt ved å endre import i toppen
                        av <code>components/Tasks/Task6.js</code> og se om det påvirker
                        turen.
                    </li>
                    <li>
                        🚲 I <em>task 6</em> Prøv å legge til støtte for å hente ut de top 10 lengste turene
                    </li>
                    <li>🚲 I <em>task 6</em> Prøv å finne ut hva som er dei 10 mest populære turene.</li>
                    <li>
                        🚲 Sy sammen alle funksjonalitetene i de ulike oppgavene til en app.
                    </li>
                    <li>
                        🚲 Se på{" "}
                        <a href="https://bergenbysykkel.no/apne-data/sanntid">
                            Bergen Bysykkel sitt API
                        </a>{" "}
                        om det er mer data du kan benytte deg av.
                    </li>
                </ul>
            </TLDR>
        </div>
    );
}
