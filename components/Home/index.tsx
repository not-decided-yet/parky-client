import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/state";
import dummyParkingLots from "../../dummies/parkingLots";
import MainBackdrop, { BackdropModes } from "../MainBackdrop";
import MapBox from "../MapBox";
import { ParkingLotData } from "../../utils/types";

const Home: React.FC = () => {
  const [backdropMode, setBackdropMode] = useState<BackdropModes>(
    BackdropModes.browsing
  );

  const { currentParkingLot, setCurrentParkingLot } = useAppContext()!;
  useEffect(() => {
    currentParkingLot && setBackdropMode(BackdropModes.detail);
  }, [currentParkingLot]);

  const context = useAppContext();

  return (
    <>
      <div className="absolute z-50">
        <button onClick={() => setBackdropMode(BackdropModes.browsing)}>
          Browse
        </button>
        <button onClick={() => setBackdropMode(BackdropModes.auth)}>
          Auth
        </button>
        <button onClick={() => setBackdropMode(BackdropModes.detail)}>
          Detail
        </button>
      </div>
      <MapBox
        parkingLots={dummyParkingLots}
        currentParkingLot={currentParkingLot}
        className="absolute"
        defaultLocation={context!.location}
      />
      <MainBackdrop
        items={dummyParkingLots}
        className="relative"
        mode={backdropMode}
        currentParkingLot={currentParkingLot}
        setCurrentParkingLot={setCurrentParkingLot}
      />
    </>
  );
};

export default Home;
