import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";
import Sheet from "react-modal-sheet";

export interface ParkingLotListProps {
  className?: string;
  items: ParkingLotData[];
}

const ParkingLotList: React.FC<ParkingLotListProps> = ({
  items,
  className,
}) => {
  return (
    <Sheet
      isOpen={true}
      onClose={() => {}}
      snapPoints={[600, 100]}
      initialSnap={1}
      className={`parking-lot-list ${className}`}
    >
      <Sheet.Container>
        {/* <Sheet.Header /> */}
        <Sheet.Content>
          {items.map((data, index) => (
            <ParkingLot key={index} {...data} />
          ))}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
    // <BottomSheet
    //   header={items.map((data, index) => (
    //     <ParkingLot key={index} {...data} />
    //   ))}
    //   snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.8]}
    //   open
    //   className={classNames("bg-white", className)}
    // >
    //   <div />
    // </BottomSheet>
  );
};

export default ParkingLotList;
