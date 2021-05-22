import Map from "../components/Map";
import ParkingLotList from "../components/ParkingLotList";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Map />
      <ParkingLotList
        containerClassName="p-4 absolute bg-white inset-x-0 bottom-0 z-10 rounded-tr-3xl"
        items={[{ name: "Union Square Parking", location: [0, 0] }]}
      />
    </div>
  );
}
