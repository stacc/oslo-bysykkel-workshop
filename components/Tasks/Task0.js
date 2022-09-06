import TLDR from "../TLDR";

export default function Task0() {
  return (
    <div>
      <TLDR>
        <p>
          <b>Kort fortalt: </b>Installer NodeJS, Git og end IDE (f.eks VSCode).
        </p>
      </TLDR>
      <br />
      <h2>Installer</h2>
      <p>Om du ikkje allerede har dette installert:</p>
      <ul>
        <li>
          <b>-</b> <a href="https://nodejs.org/en/">node/npm</a>
        </li>
        <ul>
          <li>
            <b>*</b> Last ned, og åpne installasjonsprogrammet. Følg
            instruksjonene og sørg for at du installerer den lokalt på pc'en,
            dvs ikke i onedrive eller lignende skylagrings plasseringer.
          </li>
          <li>
            <b>*</b> Husk å opne å lukke terminalen etterpå for å få oppdatert
            path variables
          </li>
          <li>
            <b>*</b> Sjekk installasjonen: - <code>node -v</code>, deretter{" "}
            <code>npm -v</code>
          </li>
        </ul>
        <li>
          <b>-</b> <a href="https://git-scm.com/downloads">Git</a>
        </li>{" "}
        <ul>
          <li>
            <b>*</b> sjekk installasjon: <code>git version</code>
          </li>
        </ul>
        <li>
          <b>-</b> Installer ein kodeeditor som har støtte for javascript
        </li>{" "}
        <ul>
          <li>
            <b>*</b> Gjerne{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>- Men
            andre som webstorm eller atom fungerer også fint
          </li>
        </ul>
        <h2>Klone repo</h2> åpne terminalen/cmd Lag ein folder for git
        prosjekter (om du ikkje allerede har det) <code>mkdir projects</code> Gå
        til projects <code>cd projects</code>. Klon ned repoet (altså last ned)
        <code>git clone "REPO LINK"</code>
        <h2>Kjøre prosjektet</h2> <br />
        <h3>
          For å installere dependencies (stå i root av prosjektet, altså øverste
          nivå)
        </h3>
        <code>npm install</code>
        <h3>
          For å starte applikasjonen (stå i root av prosjektet, altså øverste
          nivå)
        </h3>
        <code>npm run dev</code>
      </ul>
      <h2>Begynn på oppgaver</h2>
      <p>
        Oppgavene finnes i nettsiden som du nå kjører. Navigerer deg til
        localhost:3000 i nettleseren din og begynn på oppgavene! (Det kan være
        lurt å ha denne siden oppe i tilfelle du ødelegger noe lokalt :) )
      </p>
    </div>
  );
}
