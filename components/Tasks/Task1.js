export default function Task1() {
  return (
    <div>
      <p>
        <b>Oppgave: </b>Endre på emojiene (eller hele tittelen) på fremsiden av
        nettsiden vår.
      </p>
      <br />
      <p>
        NextJS er et rammeverk som bygger på React, og som gir oss litt enklere
        måter å navigere rundt på siden med Linker og måter å hente data på! Et
        av de viktigste konseptene i NextJS er "pages" mappen. Alle filer i
        "pages" mappen vil bli en ny side på nettsiden vår. For eksempel hvis en
        lager en fil i "pages" som heter "banan.js" vil url-en til denne siden
        bli "localhost:3000/banan". Det er også mulig å bruke mapper til å ha
        filer i, disse vil ikke generere en egen side selv, men hvis en har en
        fil inne i mappen, så vil navnet på mappen bli lagt til i url-en. Hvis
        vi tar bananan eksempelet vårt, og vi putter "banan.js" inne i en mappe
        som heter "frukter", så vil url-en til denne siden bli
        "localhost:3000/frukter/banan".
      </p>
      <br />
      <p>
        Datahenting i NextJS foregår ofte via å bruke funksjoner som puttes på
        bunnen av sidene våres, og vil i disse oppgavene være en funksjon som
        heter "getStaticProps". Funksjonene sender data til siden vår som
        "props". Dette er lettere å se i praksis, så se i koden på en av de
        allerede eksisterende sidene.
      </p>
    </div>
  );
}
