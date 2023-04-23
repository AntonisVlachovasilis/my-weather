import React, { useContext, useEffect } from "react";
import thermometerIcon from "../imgs/temp.png";
import TownSelector from "./TownSelector";
import { useFetchWeatherData } from "../hooks/useFetchWeatherData";
import { useState } from "react";
import { WeatherContext } from "./context/WeatherDataProvider";
import cloudIcon from "../imgs/4092.png";

const Sidebar = () => {
  const { townInput } = useContext(WeatherContext);
  const { temp, temp_min, humidity, speed, description, dt_txt } =
    useFetchWeatherData();
  const [bgMod, setBgMod] = useState("");
  useEffect(() => {
    townInput && setBgMod("info-group-modal");
  }, [townInput]);
  return (
    <div className="sidebar">
      <div className="loc-picker">
        <img className="temp-icon" src={thermometerIcon} />
        <TownSelector />
      </div>
      <div className="timestamp">{dt_txt}</div>
      <div className="weather-description">
        {description && <img src={cloudIcon} className="weather-icon" />}
        {description}
      </div>
      <div className="temp-section">
        <div className="current-temp">
          <span className="temp-indicator">{temp && "Temp:"} </span>
          {temp && Math.ceil(eval(temp - 273.15))}{" "}
          {temp && <span className="metrics">&#8451;</span>}
        </div>
        <div className="min-temp">
          <span className="temp-indicator">{temp && "min-Temp:"} </span>{" "}
          {temp_min && Math.ceil(eval(temp_min - 273.15))}
          {temp && <span className="metrics">&#8451;</span>}
        </div>
      </div>
      <div className={`info-group ${bgMod}`}>
        <div className="humidity-scale">
          {humidity && "Humidity:"}
          {humidity}
          {humidity && "%"}
        </div>
        <div className="windspeed">
          {speed && "Windspeed(mph):"} {speed}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
