import Image from "next/image";
import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";

export default function Task1() {
  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Endre på emojiene (eller hele tittelen) på
          fremsiden av nettsiden vår.
        </p>
      </TLDR>
      <br />
      <p>
        NextJS er et rammeverk som bygger på React, og som gir oss litt enklere
        måter å navigere rundt på siden med Linker og måter å hente data på! Et
        av de viktigste konseptene i NextJS er <em>pages</em> mappen. Alle filer
        i<em> pages</em> mappen vil bli en ny side på nettsiden vår. For
        eksempel hvis en lager en fil i <em>pages</em> som heter <em>banan</em>{" "}
        vil url-en til denne siden bli <em>localhost:3000/banan</em>. Det er
        også mulig å bruke mapper til å ha filer i, disse vil ikke generere en
        egen side selv, men hvis en har en fil inne i mappen, så vil navnet på
        mappen bli lagt til i url-en. Hvis vi tar bananan eksempelet vårt, og vi
        putter
        <em> banan.js</em> inne i en mappe som heter <em>frukter</em>, så vil
        url-en til denne siden bli <em>localhost:3000/frukter/banan</em>.
      </p>

      <Image
        src="/images/routes.png"
        width={1000}
        height={500}
        className={styles.image}
      />

      <p>
        Datahenting i NextJS foregår ofte via å bruke funksjoner som puttes på
        bunnen av sidene våres, og vil i disse oppgavene være en funksjon som
        heter <em>getStaticProps</em>. Funksjonene sender data til siden vår som
        <em> props</em>. Dette er lettere å se i praksis, så se i koden på en av
        de allerede eksisterende sidene.
      </p>

      <Image
        src="/images/getStaticProps.png"
        width={1000}
        height={500}
        className={styles.image}
      />
    </div>
  );
}
