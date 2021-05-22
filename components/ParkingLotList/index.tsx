import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";

export interface ParkingLotListProps {
  items: ParkingLotData[];
  containerClassName?: string;
}

export default function ParkingLotList({
  containerClassName,
  items,
}: ParkingLotListProps) {
  return (
    <div className={containerClassName}>
      {items.map((data, index) => (
        <ParkingLot key={index} data={data} />
      ))}
    </div>
  );
}
