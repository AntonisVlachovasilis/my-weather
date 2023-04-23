import React from "react";
import { useFetchWeatherData } from "../hooks/useFetchWeatherData";

import Forecast from "./Forecast";

const UpperSection = () => {
  const { forecastWeatherData } = useFetchWeatherData();
  return (
    <div className="upper-section">
      <div className="heading">
        <h2>National Weather</h2>
      </div>
      <div className="info-modal">
        <h3>Weather Forecast</h3>
        {forecastWeatherData?.map((elem) => {
          return <Forecast temp_min={elem?.main?.temp_min} />;
        })}
      </div>
    </div>
  );
};

export default UpperSection;
