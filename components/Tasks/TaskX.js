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
      <br />
      <b>Du kan for eksempel gjøre:</b>
      <ul className={styles.styledList}>
        <li>
          Sy sammen alle funksjonalitetene i de ulike oppgavene til en app.
        </li>
        <li>
          Se på{" "}
          <a href="https://bergenbysykkel.no/apne-data/sanntid">
            Bergen Bysykkel sitt API
          </a>{" "}
          om det er mer data du kan benytte deg av.
        </li>
        <li>
          Bruke Mapbox API endepunktene for å kalkulere sykkel- og gå distanse
          for å se hvilket alternativ som er raskest.
        </li>
      </ul>
    </div>
  );
}
