import "./App.css";
import { useState, useEffect, useContext } from "react";
import { useFetchWeatherData } from "./hooks/useFetchWeatherData";
import Sidebar from "./components/Sidebar";
import UpperSection from "./components/UpperSection";
import { WeatherContext } from "./components/context/WeatherDataProvider";

function WeatherApp() {
  const { townInput } = useContext(WeatherContext);
  const { description, isLoading } = useFetchWeatherData(townInput);
  const [bg, setbg] = useState("preset-bg");
  console.log(description, isLoading);
  useEffect(() => {
    console.log(townInput, description);
    if (description?.includes("clouds")) {
      setbg("cloudy-bg");
    } else if (description?.includes("rain")) {
      setbg("rainy-bg");
    } else {
      setbg("preset-bg");
    }
  }, [isLoading]);
  return (
    <div className="weather-app">
      <div className={`weather-app-wrapper ${bg}`}>
        <Sidebar />
        <div className="forecast-section">
          <UpperSection />
          <div className="footer-section"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
