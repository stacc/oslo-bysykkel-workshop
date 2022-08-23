export async function getStaticProps(context) {
  return {
    props: {pageTitle: "💖OPPGAVER💖",
  }, // will be passed to the page component as props
  }
}

export default function Tasks() {
  return (
    <>
        <p>Hello world</p>
    </>
  );
}
