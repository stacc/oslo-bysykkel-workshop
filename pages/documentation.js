export default function Documentation() {
  return (
    <>
      <p>Hello World</p>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: { pageTitle: "💖DOKUMENTASJON💖" }, // will be passed to the page component as props
  };
}
