import React, { useContext, useState } from "react";

const ColorsContext = React.createContext();

const ColorsProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeToggler = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const colorsData = {
    dtBgr: "var(--dt-background)",
    ltBgr: "var(--lt-background)",
    dtCardBgr: "var(--dt-card-background)",
    ltCardBgr: "var(--lt-card-background)",
    dtWhiteText: "var(--dt-text-white)",
    dtTextBlue: "var(--dt-text-blue)",
    ltDarkBlueText: "var(--lt-text-dark-blue)",
    ltVeryDarkBlueText: "var(--lt-text-very-dark-blue)",
    ltToggle: "var(--light-toggle)",
    dtTopBgr: "var(--dt-top-background)",
    dtToggle: "linear-gradient(var(--dark-toggle))",
  };
  return (
    <ColorsContext.Provider
      value={{ isDarkTheme, themeToggler, ...colorsData }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

export { ColorsContext, ColorsProvider };

export const useGlobalColorsContext = () => {
  return useContext(ColorsContext);
};
