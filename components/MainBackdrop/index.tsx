import { ParkingLotData } from "../../utils/types";
import ParkingLot from "../ParkingLot";
import Sheet from "react-modal-sheet";
import React, { useEffect, useState } from "react";
import ParkingLotDetail from "../ParkingLotDetail";

import dynamic from "next/dynamic";

const SearchButton = dynamic(() => import("../SearchButton"), { ssr: false });
const AuthFlow = dynamic(() => import("../AuthFlow"), { ssr: false });
export interface MainBackDropProps {
  className?: string;
  items: ParkingLotData[];
  mode: BackdropModes;
  setMode: (mode: BackdropModes) => void;
  currentParkingLot: ParkingLotData | null;
  setCurrentParkingLot: (value: ParkingLotData | null) => void;
}

export enum BackdropModes {
  browsing,
  detail,
  auth,
}

const MainBackDrop: React.FC<MainBackDropProps> = ({
  items,
  className,
  currentParkingLot,
  setCurrentParkingLot,
  mode,
  setMode,
}) => {
  const [maxHeight, setMaxHeight] = useState<number>(600);
  const [minHeight, setMinHeight] = useState<number>(240);
  const [isSearchExpanded, setSearchExpanded] = useState<boolean>(false);

  useEffect(() => {
    switch (mode) {
      case BackdropModes.detail:
        setMaxHeight(360);
        setMinHeight(360);
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
      onSnap={(snapIndex) => {
        if (mode !== BackdropModes.browsing) {
          return;
        }
        if (snapIndex === 0) {
          setSearchExpanded(true);
        } else setSearchExpanded(false);
      }}
      className={`parking-lot-list ${className}`}
    >
      <Sheet.Container>
        <Sheet.Content>
          {mode === BackdropModes.browsing && (
            <>
              <div className="h-3" />
              {items.map((data, index) => (
                <ParkingLot
                  key={index}
                  {...data}
                  isNearest={index == 0}
                  isFaded={!isSearchExpanded && index !== 0}
                  onClick={() => setCurrentParkingLot(data)}
                />
              ))}
              <SearchButton isExpanded={isSearchExpanded} />
            </>
          )}
          {mode === BackdropModes.auth && <AuthFlow />}
          {(mode === BackdropModes.detail) && currentParkingLot && (
            <ParkingLotDetail
              currentParkingLot={currentParkingLot}
              resetCurrentParkingLot={() => setCurrentParkingLot(null)}
              requestAuth={() => setMode(BackdropModes.auth)}
            />
          )}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default MainBackDrop;
