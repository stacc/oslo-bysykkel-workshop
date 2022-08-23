export async function getStaticProps(context) {
  return {
    props: {pageTitle: "💖DOKUMENTASJON💖",
  }, // will be passed to the page component as props
  }
}

export default function Documentation() {
  return (
    <>
        <p>Hello World</p>
    </>
  );
}
