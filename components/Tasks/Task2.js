import TLDR from "../TLDR";
import Image from "next/image";
import styles from "../../styles/Tasks.module.css";

export default function Task2() {
  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Endre bakgrunnsfarge (eller hva du vil på siden,
          the sky is the limit) på <code>Header</code> komponenten. Se om du
          også skjønner hvordan stilsettingen fungerer.
        </p>
      </TLDR>
      <br />
      <p>
        Nå som vi kan opprette sider og hente data til disse, bør vi faktisk få
        sidene våre til å se bra ut også! Vi skal bruke <code>CSS</code> til å
        gjøre dette. Vi skriver css i filer som slutter på
        <code> .module.css</code>, og du kan se noen eksempler på dette allerede
        i koden.
      </p>
      <Image
        src="/images/components.png"
        width={1000}
        height={500}
        className={styles.image}
      />
      <p className={styles.section}>
        Som vi nevnte over, så ønsker vi først og fremst å endre på utseendet
        til <code>Header</code> komponenten, men du spør kanskje deg selv, "hva
        er en komponent?".
      </p>
        Komponenter er en måte å bryte opp kode i mindre deler. Dette gjør vi i
        hovedsak for to grunner;
        <ul>
          <li>✨ Det å ikke ha all koden i én fil gjør den lettere å lese</li>
          <li>
            ✨ Kodebitene kan gjenbrukes, og vi slipper å copy-paste kode{" "}
          </li>
        </ul>
        For å gjenbruke koden, må den importeres inn i den filen du jobber i.
        Komponenter i NextJs blir lagret i en mappe som heter{" "}
        <code>components</code>. Navigerer til
        <code> Header</code> komponenten og se om du får til å endre på fargen!
    </div>
  );
}
