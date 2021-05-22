import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";

export interface ParkingLotListProps {
  items: ParkingLotData[];
}

export default function ParkingLotList({
  items,
}: ParkingLotListProps) {
  return (
    <div>
      {items.map((data, index) => (
        <ParkingLot key={index} data={data} />
      ))}
    </div>
  );
}
