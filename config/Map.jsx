import ReactMapGL from "react-map-gl";
import styles from "./Map.module.css";

export default ({ children, ref }) => {
  return (
    <div className={styles.map}>
        <ReactMapGL
          ref={ref}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/light-v9"
          initialViewState={{
            width: "500px",
            height: "500px",
            longitude: 5.324383,
            latitude: 60.397076,
            zoom: 11,
          }}
        >
          {children}
        </ReactMapGL>
    </div>
  );
};
