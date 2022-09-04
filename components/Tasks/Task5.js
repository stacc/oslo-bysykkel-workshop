import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";
import DropDown from "../InputFields/DropDown";
import Image from "next/image";
import {formatStationsForDropdown} from "../../utils/formatStationsForDropdown";

export default function Task5({ stations }) {
  const choices = formatStationsForDropdown(stations)

    return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>
          Du skal skrive et kall ved bruk av axios til å hente ut data fra et endepunkt.
          Du skal hente ut alle tilgjengelige stasjoner fra responsen.
        </p>
      </TLDR>
      <div className={styles.section}>
        <h4>Axios</h4>
        <p>
          Axios er et velkjent bibliotek som brukes for å lage HTTP-forespørsler
          fra nettleseren via Node og Express.js
        </p>
        <p>
          Ved å bruke axios kan du blant annet gjøre ulike kall som get, post
          osv.. direkte fra nettleser.
        </p>
        <a href={"https://axios-http.com/docs/intro"}>
          Les mer utdypende om axios
        </a>
      </div>

      <div className={styles.section}>
        <p>
          Hovedsaklig skal vi fokusere på axios.get(). GET er et HTTP-kall som
          gjør en spørring til serveren for å få tilgang til data. Du kan blant
          annet gjøre en forespørsel til en tjeneste eller et endepunkt.
        </p>
        <br/>
        <p>Her et eksempel på hvordan man kan bruke et axios.get()-kall: </p> <br/>
        <Image
        src="/images/getRequest.png"
        width={550}
        height={200}
        className={styles.image}
      />
      </div>

      <div className={styles.section}>
        <h4>Oppgavebeskrivelse</h4>
        <p>I denne oppgaven skal dere skrive et lignende kall.
        Gå til <code>{`pages/tasks/[nr].js`}</code>. I funksjonen <code>getServerSideProps()</code>
        vil du finne en TODO til oppgave 5. </p>
        <br/>
        <p>
        Her skal du implementere et GET-kall mot endepunktet
        <code> https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json </code>
        for å kunne hente ut alle stasjoner.
        </p>
        <p>Dette er et eksempel på responsen til kallet: </p>
        <Image
        src="/images/stationsResponseExample.png"
        width={300}
        height={400}
        className={styles.image}
      />
        <p>
        Datamanipulering er allerede implementert for deg slik at du kun skal fokusere på å
        implementere et suksessfullt kall.</p>

        <p>Dersom kallet er korrekt implementert vil du kunne se i dropdown-komponenten en liste over alle stasjoner du har hentet ut.</p>
      </div>

      <div className={styles.section}>
        <h4>Resultat</h4>
      <DropDown choices={choices} label="Tilgjengelig stasjoner"/>

      </div>
    </div>
  );
}
