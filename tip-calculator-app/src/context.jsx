import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isResetActive, setIsResetActive] = useState(false);

  return (
    <AppContext.Provider value={{ isResetActive, setIsResetActive }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
