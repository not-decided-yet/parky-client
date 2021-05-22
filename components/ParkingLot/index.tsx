import { ParkingLotData } from "../../utils/types";

interface ParkingLotProps {
  data: ParkingLotData;
}

export default function ParkingLot({ data: { name } }: ParkingLotProps) {
  return <div>{name}</div>;
}
