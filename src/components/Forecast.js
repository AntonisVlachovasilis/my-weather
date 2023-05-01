import React from "react";

const Forecast = ({ temp_min, temp, desc, windSpeed }) => {
  return (
    <div>
      <div className="forecast-desc">{desc}</div>
      <div className="forecast-temp">
        {temp && Math.ceil(eval(temp - 273.15))}{" "}
        {temp && <span className="metrics">&#8451;</span>}
      </div>
      <div className="forecast-temp-min">
        {temp_min && Math.ceil(eval(temp_min - 273.15))}{" "}
        {temp_min && <span className="metrics">&#8451;</span>}
      </div>
      <div className="forecast-windspeed">
        {windSpeed} {temp_min && <span>mph</span>}
      </div>
    </div>
  );
};
export default Forecast;
