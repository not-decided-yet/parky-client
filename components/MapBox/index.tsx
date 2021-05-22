import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { Coordinate, ParkingLotData } from "../../utils/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!;

const MAP_CONTAINER_ID = "map-container";

interface MarkerProps {
  "text-size": number;
  "text-offset": number[];
}

const MARKER_RESOURCES: Record<string, MarkerProps> = {
  marker_available: {
    "text-size": 14,
    "text-offset": [0, -0.2],
  },
  marker_focus: { "text-size": 20, "text-offset": [0, -0.3] },
  marker_unavailable: { "text-size": 0, "text-offset": [0, 0] },
};

interface MapProps {
  className?: string;
  currentParkingLot: ParkingLotData | null;
  parkingLots: ParkingLotData[];
  defaultLocation: Coordinate;
}

const createMap = (defaultLocation: Coordinate) => {
  const map = new mapboxgl.Map({
    container: MAP_CONTAINER_ID,
    center: defaultLocation,
    style: "mapbox://styles/mapbox/streets-v11",
    minZoom: 17,
  }).addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  Object.keys(MARKER_RESOURCES).forEach((imageName) => {
    map.loadImage(
      `/img/${imageName}.png`,
      (err, image) =>
        image && map.addImage(imageName, image, { pixelRatio: 2.5 })
    );
  });

  return map;
};

const MapBox: React.FC<MapProps> = ({
  parkingLots,
  currentParkingLot,
  className,
  defaultLocation,
}) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    // const firstParkingLot = parkingLots[0];
    setMap(createMap(defaultLocation));
  }, []);

  useEffect(() => {
    currentParkingLot &&
      map?.flyTo({
        center: [currentParkingLot.longitude, currentParkingLot.latitude],
      });
  }, [currentParkingLot]);

  useEffect(() => {
    if (!map) return;
    const features = parkingLots.map(({ longitude, latitude }, index) => {
      const markerType = [
        "marker_focus",
        "marker_unavailable",
        "marker_available",
      ][index % 3]; // TODO: set using focus index & ...

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        properties: {
          name: "3", // TODO: set available
          "image-name": markerType,
          ...MARKER_RESOURCES[markerType],
        },
      };
    });

    // new mapboxgl.Marker().setLngLat(coord).addTo(map);
    map.on("load", () => {
      const SOURCE_ID = `test-source-name`;

      map.addSource(SOURCE_ID, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: features as any,
        },
      });

      map.addLayer({
        id: SOURCE_ID,
        type: "symbol",
        source: SOURCE_ID,
        layout: {
          "text-field": ["get", "name"],
          "icon-text-fit": "none",
          "icon-image": ["get", "image-name"],
          "icon-allow-overlap": true,
          "text-allow-overlap": true,
          "text-size": ["get", "text-size"],
          "text-offset": ["get", "text-offset"],
        },
      });
    });
  }, [map, parkingLots]);

  return (
    <div
      className={`w-screen h-screen z-0 ${className}`}
      style={{ color: "#ffffff" }}
    >
      <div id={MAP_CONTAINER_ID} className="w-full h-full" />
    </div>
  );
};

export default MapBox;
