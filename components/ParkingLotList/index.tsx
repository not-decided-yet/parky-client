import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";
import Sheet from "react-modal-sheet";
import { useEffect, useState } from "react";

export interface ParkingLotListProps {
  className?: string;
  items: ParkingLotData[];
}

const ParkingLotList: React.FC<ParkingLotListProps> = ({
  items,
  className,
}) => {
  const [maxHeight, setMaxHeight] = useState<number>(600);

  useEffect(() => {
    setMaxHeight(window.innerHeight - 60);
  }, []);
  return (
    <Sheet
      isOpen={true}
      onClose={() => {}}
      snapPoints={[maxHeight, 240]}
      initialSnap={1}
      className={`parking-lot-list ${className}`}
    >
      <Sheet.Container>
        <Sheet.Content>
          <div className="h-3" />
          {items.map((data, index) => (
            <ParkingLot key={index} {...data} isNearest={index == 0} />
          ))}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
};

export default ParkingLotList;
