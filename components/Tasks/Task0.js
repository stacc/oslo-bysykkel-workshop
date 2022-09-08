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
      <h2>Installering</h2>
      <p>Om du ikke allerede har dette installert:</p>
      <ul>
        <li>
          <b>⭐</b> <a href="https://nodejs.org/en/">node/npm</a>
        </li>
        <ul>
          <li>
            <b>🌺</b> Last ned, og åpne installasjonsprogrammet. Følg
            instruksjonene og sørg for at du installerer den lokalt på pc'en,
            dvs ikke i onedrive eller lignende skylagrings plasseringer.
          </li>
          <li>
            <b>🌺</b> Husk å åpne og lukke terminalen etterpå for å få oppdatert
            path variables
          </li>
          <li>
            <b>🌺</b> Sjekk installasjonen: - <code>node -v</code>, deretter{" "}
            <code>npm -v</code>
          </li>
        </ul>
        <li>
          <b>⭐</b> <a href="https://git-scm.com/downloads">Git</a>
        </li>{" "}
        <ul>
          <li>
            <b>🌺</b> sjekk installasjon: <code>git version</code>
          </li>
        </ul>
        <li>
          <b>⭐</b> Installer en kodeeditor som har støtte for javascript
        </li>{" "}
        <ul>
          <li>
            <b>🌺</b> Gjerne{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>- Men
            andre som webstorm eller atom fungerer også fint
          </li>
        </ul>
      </ul>
      
      
      <h2>Klone repo</h2>
        <ul>
          <li>
            <b>1️⃣ </b>Åpne terminalen/cmd</li>
          <li>
          <b>2️⃣ </b>
            Lag en folder (mappe) for gitprosjekter (om du ikke allerede har
            det) <br></br>
            <code>mkdir projects</code>
          </li>
          <li>
          <b>3️⃣ </b>Gå til projects <br></br>
            <code>cd projects</code>
          </li>
          <li>
          <b>4️⃣ </b>Klon ned repoet (altså last ned)<br></br>
          <code>
            git clone https://github.com/stacc/echo-karriere-workshop.git
          </code>
          </li> 
          
        </ul>
        
        
        <h2>Kjøre prosjektet</h2>
        <h4>For å installere dependencies</h4>
        <code>npm install</code>
        <h4>For å starte applikasjonen</h4>
        <code>npm run dev</code>
      
      
      
      <h2>Begynn på oppgaver</h2>
      <p>
        Oppgavene finnes i nettsiden som du nå kjører. Navigerer deg til
        localhost:3000 i nettleseren din og begynn på oppgavene! (Det kan være
        lurt å ha denne siden oppe i tilfelle du ødelegger noe lokalt :) )
      </p>
    </div>
  );
}
