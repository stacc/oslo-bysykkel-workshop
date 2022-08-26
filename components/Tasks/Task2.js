import TLDR from "../TLDR";
import Image from "next/image";
import styles from "../../styles/Tasks.module.css";

export default function Task2() {
  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Endre bakgrunnsfarge (eller hva du vil på siden,
          the sky is the limit) på <em>Header</em> komponenten. Se om du også
          skjønner hvordan stilsettingen fungerer.
        </p>
      </TLDR>
      <br />
      <p>
        Nå som vi kan opprette sider og hente data til disse, bør vi faktisk få
        sidene våre til å se bra ut! Vi skal bruke et språk som heter{" "}
        <em>CSS</em> til å gjøre dette. Vi skriver css i filer som slutter på
        <em> .module.css</em>, og du kan se noen eksempler på dette allerede i
        filene.
      </p>
      <Image
        src="/images/components.png"
        width={1000}
        height={500}
        className={styles.image}
      />
      <p>
        Først og fremst ønsker vi å endre på utseendet til <em>Header</em>{" "}
        komponenten, men du spør kanskje deg selv, "hva er en komponent?".
        Komponenter er en måte å bryte opp kode i flere mindre deler. Vi kan da
        ta ut kode og definere det i separate filer, og senere kalle på disse
        filene og dermed ha mindre kodelinjer i hovedsiden. Komponenter i NextJs
        blir lagret i en mappe som heter <em>components</em>. Navigerer til
        <em> Header</em> komponenten og se om du får til å endre på fargen!
      </p>
    </div>
  );
}
