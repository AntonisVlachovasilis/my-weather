import React, { useContext } from "react";
import { WeatherContext } from "./context/WeatherDataProvider";
import Forecast from "./Forecast";

const UpperSection = () => {
  const { forecastWeatherData } = useContext(WeatherContext);
  return (
    <div className="upper-section">
      <div className="heading">
        <h2>National Weather</h2>
      </div>
      <div className="info-modal">
        <h3>Weather Forecast</h3>
        <div className="forecast-wrapper">
          {forecastWeatherData?.map((elem) => {
            return (
              <Forecast
                temp_min={elem?.main?.temp_min}
                temp={elem?.main?.temp}
                desc={elem?.weather[0]?.description}
                windSpeed={elem?.wind?.speed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
