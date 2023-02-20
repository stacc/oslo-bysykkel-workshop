import ReactMapGL, { Marker } from "react-map-gl";
import styles from "./Map.module.css";

export default ({
  height = "500px",
  width = "500px",
  zoom = 11,
  longitude = 5.324383,
  latitude = 60.397076,
  children,
  ref,
}) => {
  return (
    <div className={styles.map}>
      <ReactMapGL
        ref={ref}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        initialViewState={{
          width,
          height,
          longitude,
          latitude,
          zoom,
        }}
      >
        {children}
      </ReactMapGL>
    </div>
  );
};
