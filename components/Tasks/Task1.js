import Image from "next/image";
import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";

export default function Task1() {
  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Endre på 💪-emojien i tittelen på fremsiden av
          nettsiden vår.
        </p>
      </TLDR>
      <br />
      <p className={styles.section}>
        NextJS er et rammeverk som bygger på React. En fordel NextJS gir oss, er
        en forenklet måte å jobbe med linker og måter å hente data på.
      </p>
      <p className={styles.section}>
        Et av de viktigste konseptene i NextJS er <code>pages</code> mappen.
        Alle filer i<code> pages</code> mappen vil bli en ny side på nettsiden
        vår. For eksempel hvis en lager en fil i <code>pages</code> som heter{" "}
        <code>banan</code> vil url-en til denne siden bli{" "}
        <code>localhost:3000/banan</code>.
      </p>
      <p>
        Det er også mulig å bruke mapper til å ha filer i, disse vil ikke
        generere en egen side selv, men hvis en har en fil inne i mappen, så vil
        navnet på mappen bli lagt til i url-en. Hvis vi tar bananan eksempelet
        vårt, og vi putter
        <code> banan.js</code> inne i en mappe som heter <code>frukter</code>,
        så vil url-en til denne siden bli{" "}
        <code>localhost:3000/frukter/banan</code>.
      </p>

      <Image
        src="/images/routes.png"
        width={1000}
        height={500}
        className={styles.image}
      />

      <p className={styles.section}>
        Datahenting i NextJS foregår ofte via å bruke funksjoner som puttes på
        bunnen av sidene våre, og vil i disse oppgavene være en funksjon som
        heter <code>getStaticProps</code>. Funksjonene sender data til siden vår
        som
        <code> props</code>.
      </p>
      <p className={styles.section}>
        Dette er lettere å skjønne når man ser det i kode enn når man får det
        forklart, så se i koden på en av de allerede eksisterende sidene.
      </p>

      <Image
        src="/images/title.png"
        width={1000}
        height={200}
        className={styles.image}
      />
    </div>
  );
}
