import React, { createContext, useState } from "react";
import { iPitanje } from "../../interfaces/iPitanje";
import { iAppContext } from "../../interfaces/iAppContext";

const AppContext = createContext<iAppContext>({
  pitanja: [],
  setPitanja: () => null,
});

interface iProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: iProps) => {
  const [pitanja, setPitanja] = useState<iPitanje[]>([]);

  return (
    <AppContext.Provider value={{ pitanja, setPitanja }}>
      {children}
    </AppContext.Provider>
  );
};
