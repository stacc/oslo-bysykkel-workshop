import Link from "next/link";
import TaskCompleted from "../../components/TaskCompleted";
import { tasks } from "../../components/Tasks";
import styles from "../../styles/Tasks.module.css";

export default function Tasks({ nr, tasksLength }) {
  const task = tasks.find((task) => task.id === nr);
  const isCompleted = typeof task.isCompleted === "function" ? task.isCompleted() : 0
  return (
    <TaskCompleted isCompleted={isCompleted}>
      <div>
        <div className={styles.taskContainer}>{task.Component}</div>
        <div className={styles.buttonContainer}>
          {nr !== 1 && (
            <Link href={`/tasks/${nr - 1}`} passHref>
              <a className={styles.button}>Forrige oppgave</a>
            </Link>
          )}
          {nr === 1 && (
            <Link href={`/tasks`} passHref>
              <a className={styles.button}>Til oppgaveoversikten</a>
            </Link>
          )}
          {nr !== tasksLength && (
            <Link href={`/tasks/${nr + 1}`} passHref>
              <a className={styles.button}>Neste oppgave</a>
            </Link>
          )}
        </div>
      </div>
    </TaskCompleted>
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
