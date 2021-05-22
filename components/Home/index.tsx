import React, { useState } from "react";
import { useAppContext } from "../../context/state";
import dummyParkingLots from "../../dummies/parkingLots";
import MainBackdrop, { BackdropModes } from "../MainBackdrop";
import MapBox from "../MapBox";

const Home: React.FC = () => {
  const [backdropMode, setBackdropMode] = useState<BackdropModes>(
    BackdropModes.browsing
  );

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
        className="absolute"
        defaultLocation={context!.location}
      />
      <MainBackdrop
        items={dummyParkingLots}
        className="relative"
        mode={backdropMode}
      />
    </>
  );
};

export default Home;
