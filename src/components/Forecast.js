import React, { useState, useEffect } from "react";

const Forecast = ({ temp_min, temp, desc, windSpeed, dt_txt, isLoading }) => {
  const [forecastBg, setForecastBg] = useState("");
  useEffect(() => {
    setForecastBg("forecastModalBg");
  }, [isLoading]);
  return (
    <div className={`forecast-modals ${forecastBg}`}>
      <div className="forecast-dt">{dt_txt}</div>
      <div className="forecast-desc">{desc}</div>
      <div className="forecast-temp">
        {temp && "Temp: "}
        {temp && Math.ceil(eval(temp - 273.15))}{" "}
        {temp && <span className="metrics">&#8451;</span>}
      </div>
      <div className="forecast-temp-min">
        {temp_min && "Temp-min: "}
        {temp_min && Math.ceil(eval(temp_min - 273.15))}{" "}
        {temp_min && <span className="metrics">&#8451;</span>}
      </div>
      <div className="forecast-windspeed">
        {windSpeed && "WindSpeed: "}
        {windSpeed} {windSpeed && <span>mph</span>}
      </div>
    </div>
  );
};
export default Forecast;
