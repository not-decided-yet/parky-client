import React from "react";
import { ParkingLotData } from "../../utils/types";

interface ParkingLotMetricProps {
  value: string;
  description: string;
}

const ParkingLotMetric: React.FC<ParkingLotMetricProps> = ({
  value,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">{value}</p>
      <p className="text-md text-gray-500 font-normal">{description}</p>
    </div>
  );
};

interface ParkingLotDetailProps {
  currentParkingLot: ParkingLotData;
  resetCurrentParkingLot: () => void;
}

const ParkingLotDetail: React.FC<ParkingLotDetailProps> = ({
  currentParkingLot: { name },
  resetCurrentParkingLot,
}) => {
  /* TODO: customize ParkingLotMetric */
  return (
    <div className="p-6">
      <span className="material-icons" onClick={resetCurrentParkingLot}>
        arrow_back
      </span>
      <h3 className="text-4xl mt-2">{name}</h3>
      <div className="flex flex-row justify-between mt-6">
        <ParkingLotMetric value="1.4km" description="Distance" />
        <ParkingLotMetric value="$4/h" description="Fee" />
        <ParkingLotMetric value="32" description="Capacity" />
      </div>
      <button className="bg-primary text-xl text-white rounded-3xl w-full py-2 shadow-md mt-8">
        Reserve
      </button>
    </div>
  );
};

export default ParkingLotDetail;
