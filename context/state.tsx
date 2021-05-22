import React, { createContext, useContext, useEffect, useState } from "react";
import dummyParkingLots from "../dummies/parkingLots";
import { KeyPair } from "../pages/api/keypair";
import { getUserPublicKey } from "../services/encryptionService";
import { Coordinate, ParkingLotData, UserData } from "../utils/types";

const DEFAULT_LOCATION: Coordinate = [-122.410954, 37.78379];  // San Francisco

interface AppState {
  user?: UserData;
  setUser: (user?: UserData) => void;
  parkingLots: ParkingLotData[],
  location: Coordinate;
  setLocation: (location: Coordinate) => void;
  currentParkingLot: ParkingLotData | null;
  setCurrentParkingLot: (value: (ParkingLotData | null)) => void;
  keyPair: KeyPair | null;
}

const AppContext = createContext<AppState | null>(null);

export const AppWrapper: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [location, setLocation] = useState<Coordinate>(DEFAULT_LOCATION);
  const [currentParkingLot, setCurrentParkingLot] = useState<ParkingLotData | null>(null);
  const [parkingLots, setParkingLots] = useState<ParkingLotData[]>([]);
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);

  const sharedState: AppState = {
    user,
    setUser,
    location,
    setLocation,
    currentParkingLot,
    setCurrentParkingLot,
    parkingLots,
    keyPair,
  };

  useEffect(() => {
    getUserPublicKey().then(setKeyPair);
    setTimeout(() => {
      setParkingLots(dummyParkingLots);
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
