import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";
import Sheet from "react-modal-sheet";
import { useEffect, useState } from "react";
import AuthFlow from "../AuthFlow";
import ParkingLotDetail from "../ParkingLotDetail";

export interface MainBackDropProps {
  className?: string;
  items: ParkingLotData[];
  mode?: BackdropModes;
}

export enum BackdropModes {
  browsing,
  detail,
  auth,
}

const MainBackDrop: React.FC<MainBackDropProps> = ({
  items,
  className,
  mode = BackdropModes.browsing,
}) => {
  const [maxHeight, setMaxHeight] = useState<number>(600);
  const [minHeight, setMinHeight] = useState<number>(240);

  useEffect(() => {
    switch (mode) {
      case BackdropModes.detail:
        setMaxHeight(120);
        setMinHeight(120);
        break;
      case BackdropModes.auth:
        setMaxHeight(window.innerHeight - 60);
        setMinHeight(window.innerHeight - 60);
        break;
      default:
        setMaxHeight(window.innerHeight - 60);
        setMinHeight(240);
    }
  }, [mode]);

  return (
    <Sheet
      isOpen={true}
      onClose={() => {}}
      snapPoints={[maxHeight, minHeight]}
      initialSnap={1}
      className={`parking-lot-list ${className}`}
    >
      <Sheet.Container>
        <Sheet.Content>
          {mode === BackdropModes.browsing && (
            <>
              <div className="h-3" />
              {items.map((data, index) => (
                <ParkingLot key={index} {...data} isNearest={index == 0} />
              ))}
            </>
          )}
          {
            mode === BackdropModes.auth && <AuthFlow />
          }
          {
            mode === BackdropModes.detail && <ParkingLotDetail />
          }
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop />
    </Sheet>
  );
};

export default MainBackDrop;
