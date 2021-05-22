import { ParkingLotData } from "../../utils/types";

const ParkingLot: React.FC<ParkingLotData> = ({ ...data }) => {
  return <div className="h-8">{data.name}</div>;
}

export default ParkingLot;
