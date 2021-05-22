import { ParkingLotData } from "../../utils/types";

const ParkingLot: React.FC<ParkingLotData> = ({ ...data }) => {
  return <div>{data.name}</div>;
}

export default ParkingLot;
