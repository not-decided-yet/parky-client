import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import ParkingLotList from "../components/ParkingLotList";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN!;

const MAP_CONTAINER_ID = "map-container";

export default function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: "mapbox://styles/mapbox/streets-v11",
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);

  return (
    <div id={MAP_CONTAINER_ID} className="w-full h-screen">
      <ParkingLotList className="p-4 absolute bg-white inset-x-0 bottom-0 z-10 rounded-tr-3xl" />
    </div>
  );
}
