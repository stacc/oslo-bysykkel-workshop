import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3, {isCompleted as isTask3Completed} from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";

export const tasks = [
  {
    id: 1,
    title: "1. Kom i gang med NextJS",
    Component: <Task1 />,
    description:
      "I denne oppgaven får vi en kort introduksjon til hvordan NextJS fungerer og hvordan vi kan bruke det.",
  },
  {
    id: 2,
    title: "2. Sett litt farge på det!",
    Component: <Task2 />,
    description:
      "Nå skal vi prøve oss på å bruke CSS til å endre på hvordan nettsiden ser ut visuellt!",
  },
  {
    id: 3,
    title: "3. Praktisk bruk av JSON data",
    Component: <Task3 />,
    isCompleted: isTask3Completed,
    description: "Vi fortsetter med å se litt hvordan bysykkel sin historiske JSON data ser ut og hvordan vi kan bruke det til å visualisere turen som har vart legnst.",
  },
  {
    id: 4,
    title: "4. Tittel",
    Component: <Task4 />,
    description: "Beskrivelse",
  },
  {
    id: 5,
    title: "5. Hvor er vi?!",
    Component: <Task5 />,
    description:
      "Vi ønsker nå å finne ut hvor vi er, og hvor den nærmeste bysykkel stasjonen er.",
  },
];
