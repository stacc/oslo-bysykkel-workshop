import Task1 from "./Task1";
import Task2 from "./Task2";

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
];
