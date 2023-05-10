import React, { useState, useEffect } from "react";

const FourDaysForecast = ({
  temp,
  temp_min,
  description,
  dt_txt,
  multiDaysWeatherForecast,
  //   setClicked,
  townInput,
}) => {
  //   setClicked(false);
  const [bg, setBg] = useState("");
  useEffect(() => {
    townInput && setBg("forecastModalBg");
  }, [multiDaysWeatherForecast]);
  return (
    <div className={`multi-days-container ${bg}`}>
      <div className="multi-days-forecast">{dt_txt}</div>
      <div className="multi-days-forecast">{description}</div>
      <div className="multi-days-forecast">
        {temp && "Temp: "}
        {temp && Math.ceil(eval(temp - 273.15))}
        {temp && <span className="metrics">&#8451;</span>}
      </div>
      <div className="multi-days-forecast">
        {temp_min && "Temp-min: "}
        {temp_min && Math.ceil(eval(temp_min - 273.15))}
        {temp_min && <span className="metrics">&#8451;</span>}
      </div>
    </div>
  );
};

export default FourDaysForecast;
