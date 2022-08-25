import Link from "next/link";
import { tasks } from "../../components/Tasks";
import styles from "../../styles/Tasks.module.css";

export default function Tasks({ nr, tasksLength }) {
  const task = tasks.find((task) => task.id === nr);
  return (
    <div>
      {task.Component}
      <div className={styles.buttonContainer}>
        {nr !== 1 && (
          <Link href={`/tasks/${nr - 1}`} passHref>
            <a className={styles.button}>Forrige oppgave</a>
          </Link>
        )}
        {nr !== tasksLength && (
          <Link href={`/tasks/${nr + 1}`} passHref>
            <a className={styles.button}>Neste oppgave</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = tasks.map(({ id }) => ({ params: { nr: `${id}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const task = tasks.find((task) => task.id === parseInt(params.nr));
  const tasksLength = tasks.length;
  const nr = parseInt(params.nr);
  return {
    props: { pageTitle: task.title, nr, tasksLength }, // will be passed to the page component as props
  };
}
