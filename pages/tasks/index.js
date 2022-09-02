import Link from "next/link";
import { getTasks } from "../../components/Tasks";
import styles from "../../styles/Tasks.module.css";

export default function Tasks() {
  return (
    <ul className={styles.taskList}>
      {getTasks().map(({ id, title, description }) => (
        <Link key={id} href={`/tasks/${id}`} passHref>
          <a className={styles.link}>
            <h2 className={styles.title}>{title}</h2>
            <p>{description}</p>
          </a>
        </Link>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: { pageTitle: "OPPGAVER" }, // will be passed to the page component as props
  };
}
