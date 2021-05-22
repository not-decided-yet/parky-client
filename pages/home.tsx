import { useState } from "react";
import Map from "../components/MapBox";
import ParkingLotList from "../components/ParkingLotList";
import { ParkingLotData } from "../utils/types";

export default function Home() {
  const [parkingLots, _] = useState<ParkingLotData[]>([
    { name: "Union Square Parking", location: [126.516669, 37.529149] },
  ]);

  return (
    <div className="w-full h-screen">
      <Map parkingLots={parkingLots} />
      <ParkingLotList
        containerClassName="p-4 absolute bg-white inset-x-0 bottom-0 z-10 rounded-tr-3xl"
        items={parkingLots}
      />
    </div>
  );
}
