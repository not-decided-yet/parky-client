import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { ParkingLotData } from "../../utils/types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!;

const MAP_CONTAINER_ID = "map-container";

interface MapProps {
  parkingLots: ParkingLotData[];
}

const MapBox: React.FC<MapProps> = ({ parkingLots }) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: MAP_CONTAINER_ID,
        center: parkingLots[0]?.location || [0, 0],
        style: "mapbox://styles/mapbox/streets-v11",
        minZoom: 10,
      }).addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      )
    );
  }, []);

  useEffect(() => {
    if (!map) return;
    parkingLots.forEach(({ location }) =>
      new mapboxgl.Marker().setLngLat(location).addTo(map)
    );
  }, [map, parkingLots]);

  return <div id={MAP_CONTAINER_ID} className="w-full h-full"></div>;
};

export default MapBox;
