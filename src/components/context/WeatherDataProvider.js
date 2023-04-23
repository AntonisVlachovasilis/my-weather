import React, { createContext, useState } from "react";

export const WeatherContext = createContext(null);

const WeatherDataProvider = ({ children }) => {
  const [townInput, setTownInput] = useState("");
  const providerValues = { townInput, setTownInput };
  return (
    <WeatherContext.Provider value={providerValues}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherDataProvider;
