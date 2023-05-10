import React, { createContext, useState } from "react";
import { useFetchWeatherData } from "../../hooks/useFetchWeatherData";

export const WeatherContext = createContext(null);

const WeatherDataProvider = ({ children }) => {
  const [townInput, setTownInput] = useState("");
  const {
    description,
    temp_min,
    temp,
    humidity,
    speed,
    isLoading,
    dt_txt,
    forecastWeatherData,
    multiDaysWeatherForecast,
  } = useFetchWeatherData(townInput);
  const providerValues = {
    townInput,
    setTownInput,
    description,
    temp_min,
    temp,
    humidity,
    speed,
    isLoading,
    dt_txt,
    forecastWeatherData,
    multiDaysWeatherForecast,
  };

  return (
    <WeatherContext.Provider value={providerValues}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherDataProvider;
