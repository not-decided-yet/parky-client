import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { Coordinate, ParkingLotData } from "../../utils/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!;

const MAP_CONTAINER_ID = "map-container";

interface MapProps {
  className?: string;
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

  [
    { name: "marker_available" },
    { name: "marker_focus", content: [20, 20, 75, 65] },
    { name: "marker_unavailable" },
  ].forEach(({ name: imageName, ...options }) => {
    map.loadImage(
      `/img/${imageName}.png`,
      (err, image) => image && map.addImage(imageName, image, options)
    );
  });

  return map;
};

const MapBox: React.FC<MapProps> = ({
  parkingLots,
  className,
  defaultLocation,
}) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    // const firstParkingLot = parkingLots[0];
    setMap(createMap(defaultLocation));
  }, []);

  useEffect(() => {
    if (!map) return;
    parkingLots.forEach(({ longitude, latitude }, index) => {
      const coord: Coordinate = [longitude, latitude];
      // new mapboxgl.Marker().setLngLat(coord).addTo(map);

      map.on("load", () => {
        const SOURCE_ID = `test-source-name-${index}`;
        map.addSource(SOURCE_ID, {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: coord,
                },
                properties: {
                  "image-name": "marker_focus",
                  name: "7",
                },
              },
            ],
          },
        });

        map.addLayer({
          id: SOURCE_ID,
          type: "symbol",
          source: SOURCE_ID,
          layout: {
            "text-field": ["get", "name"],
            "icon-text-fit": "both",
            "icon-image": ["get", "image-name"],
            "icon-allow-overlap": true,
            "text-allow-overlap": true,
          },
        });
      });
    });
  }, [map, parkingLots]);

  return (
    <div className={`w-screen h-screen z-0 ${className}`}>
      <div id={MAP_CONTAINER_ID} className="w-full h-full" />
    </div>
  );
};

export default MapBox;
