import React, { createContext, useContext, useState } from "react";
import { UserData } from "../utils/types";

interface AppState {
  user?: UserData;
  setUser: (user?: UserData) => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppWrapper: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<UserData>();

  const sharedState: AppState = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
