import { useMemo } from "react";
import { ParkingLotData } from "../../utils/types";
import Ripples from "react-ripples";

interface ParkingLotProps extends ParkingLotData {
  isNearest?: boolean;
  // TODO: 주차장 정보 눌렀을때에 대한 기능이 필요해요
  onClick?: React.MouseEventHandler;
}

const ParkingLot: React.FC<ParkingLotProps> = ({
  name,
  is_free: isFree,
  lots,
  isNearest = true,
  onClick,
}) => {
  const leftSeatCount = useMemo<number>(() => {
    // TODO: 남은 주차 갯수 직접 계산해야함
    return 3;
  }, [lots]);

  const distance = useMemo<string>(() => {
    // TODO: 주차장 위치 기반으로 거리 계산 해주세여
    return "1.4km";
  }, [lots]);

  const maxCapacity = useMemo<number>(() => {
    // TODO: 최대 주차 대수 계산해주세여
    return 24;
  }, [lots]);

  return (
    <div className="overflow-hidden rounded" onClick={onClick}>
      <Ripples color="rgba(0, 0, 0, .1)">
        <div className="flex flex-row pr-6 pl-6 pt-3 pb-6">
          <div className="flex flex-col items-center justify-items-start pr-8">
            <p className=" text-5xl">{leftSeatCount}</p>
            <p className="text-sm font-normal opacity-40">left</p>
          </div>
          <div>
            {isNearest && (
              <p className="text-primary text-sm">Nearest Parking Lot</p>
            )}
            <p className="text-3xl">{name}</p>
            <div className="flex flex-row mt-3">
              <p className="text-sm font-normal mr-4">{distance}</p>
              <p className="text-sm font-normal mr-4">
                {isFree ? "Free" : "Paid"}
              </p>
              <p className="text-sm font-normal mr-4">Max. {maxCapacity}</p>
            </div>
          </div>
        </div>
      </Ripples>
    </div>
  );
};

export default ParkingLot;
