import { getCurrentLocation } from "../utils/getCurrentLocation";

export default function Documentation() {
  function handleClick() {
    getCurrentLocation()
      .then((location) => console.log(location))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <button onClick={handleClick}>klikk</button>
      <p>Hello World</p>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: { pageTitle: "💖DOKUMENTASJON💖" }, // will be passed to the page component as props
  };
}
