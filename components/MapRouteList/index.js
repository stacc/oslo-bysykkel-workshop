import React, { useCallback, useState } from "react";
import Map from "../../config/Map";
import styles from "./MapRouteList.module.css"
import { Layer, Source } from "react-map-gl";
import { TransparentButton } from "../Button";

export function MapRouteList({ routes }) {
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [hoveredRoute, setHoveredRoute] = useState(0);

  const getOpacity = useCallback(
    (routeId) => {
      if (routeId === selectedRoute) return 1.0;
      if (routeId === hoveredRoute) return 0.5;
      return 0.0;
    },
    [selectedRoute, hoveredRoute]
  );

  return (
    <div className={styles.mapRouteList}>
      <Map>
        {routes.map((route, key) => (
          <Source
            key={key}
            id={`${key}_route`}
            type="geojson"
            data={route.geometry}
          >
            <Layer
              type="line"
              layout={{
                visibility: "visible",
                "line-cap": "round",
                "line-join": "round",
              }}
              paint={{
                "line-color": `rgb(174, 54, 44)`,
                "line-width": 4,
                "line-opacity": getOpacity(key),
              }}
            />
          </Source>
        ))}
      </Map>
      <div className={styles.aside}>
        <h4 style={{ marginBottom: "0.7em" }}>Top 10 lengste turer</h4>
        {routes.map((route, key) => (
          <TransparentButton
            key={key}
            height="33px"
            onClick={() => setSelectedRoute(key)}
            onMouseOver={() => setHoveredRoute(key)}
            onMouseLeave={() => setHoveredRoute(null)}
          >
            {key + 1}: {Math.round(route.duration / 60)} min {route.duration % 60 > 0 ? `og ${route.duration % 60} sek`: ""}
          </TransparentButton>
        ))}
      </div>
    </div>
  );
}
