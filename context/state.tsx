import React, { createContext, useContext, useState } from "react";
import { Coordinate, UserData } from "../utils/types";

const DEFAULT_LOCATION: Coordinate = [-122.410954, 37.78379];  // San Francisco

interface AppState {
  user?: UserData;
  setUser: (user?: UserData) => void;
  location: Coordinate;
  setLocation: (location: Coordinate) => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppWrapper: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [location, setLocation] = useState<Coordinate>(DEFAULT_LOCATION);

  const sharedState: AppState = {
    user,
    setUser,
    location,
    setLocation,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
