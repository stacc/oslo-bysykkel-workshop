import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3, { isCompleted as isTask3Completed } from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Task6 from "./Task6";
import Task7, { isCompleted as isTask7Completed } from "./Task7";
import Task8 from "./Task8";

export const getTasks = (props = {}) => [
  {
    id: 1,
    title: "1. Kom i gang med NextJS",
    Component: <Task1 {...props} />,
    description:
      "I denne oppgaven får vi en kort introduksjon til hvordan NextJS fungerer og hvordan vi kan bruke det.",
  },
  {
    id: 2,
    title: "2. Sett litt farge på det!",
    Component: <Task2 {...props} />,
    description:
      "Nå skal vi prøve oss på å bruke CSS til å endre på hvordan nettsiden ser ut visuellt!",
  },
  {
    id: 3,
    title: "3. Praktisk bruk av JSON data",
    Component: <Task3 {...props} />,
    isCompleted: isTask3Completed,
    description:
      "Vi fortsetter med å se litt hvordan bysykkel sin historiske JSON data ser ut og hvordan vi kan bruke det til å visualisere turen som har vart legnst.",
  },
  {
    id: 4,
    title: "4. Hvor er vi?!",
    Component: <Task4 {...props} />,
    description:
      "Vi ønsker nå å finne ut hvor vi er, og hvor den nærmeste bysykkelstativet er.",
  },
  {
    id: 5,
    title: "5. Fra hit til dit",
    Component: <Task5 {...props} />,
    description: "Vis en rute på kartet fra en valgfri stasjon til en annen",
  },
  {
    id: 6,
    title: "6. Vis tilgjengelige stasjoner",
    Component: <Task6 {...props} />,
    description: "Gjøre et kall mot endepunkt for å hente ut sykkel stasjoner",
  },
  {
    id: 7,
    title: "7. Send inn alle detaljene",
    Component: <Task7 {...props} />,
    isCompleted: isTask7Completed,
    description:
      "Bruk et skjema for å sende inn stedene du vil reise til og fra",
  },
  {
    id: 8,
    title: "8. Vis tilgjengelig kapasitet",
    Component: <Task8 {...props}/>,
    description:
        "Visualiser den resterende kapasiteten på stasjoner",
  },
];
