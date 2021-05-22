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
    const firstParkingLot = parkingLots[0];
    setMap(
      new mapboxgl.Map({
        container: MAP_CONTAINER_ID,
        center: [firstParkingLot.longitude, firstParkingLot.latitude] || [0, 0],
        style: "mapbox://styles/mapbox/streets-v11",
        minZoom: 17,
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
    parkingLots.forEach(({ longitude, latitude }) =>
      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map)
    );
  }, [map, parkingLots]);

  return <div id={MAP_CONTAINER_ID} className="w-screen h-screen"></div>;
};

export default MapBox;
