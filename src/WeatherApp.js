import "./App.css";
import { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import UpperSection from "./components/UpperSection";
import FourDaysForecast from "./components/FourDaysForecast";
import { WeatherContext } from "./components/context/WeatherDataProvider";

function WeatherApp() {
  const { description, isLoading, townInput, multiDaysWeatherForecast } =
    useContext(WeatherContext);

  const [clicked, setClicked] = useState(false);
  const [bg, setbg] = useState("preset-bg");
  useEffect(() => {
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
          <div className="footer-section">
            {townInput && (
              <button
                className="four-days-btn"
                onClick={() => {
                  if (clicked === false) {
                    setClicked(true);
                  } else {
                    setClicked(false);
                  }
                }}
              >
                Click to see 4 days forecast{" "}
                <span className="arrow">&#x2228;</span>
              </button>
            )}
            <div className="multi-days-wrapper">
              {clicked &&
                multiDaysWeatherForecast?.map((elem) => {
                  return (
                    <FourDaysForecast
                      temp={elem?.temp}
                      temp_min={elem?.temp_min}
                      description={elem?.description}
                      dt_txt={elem?.dt_txt}
                      multiDaysWeatherForecast={multiDaysWeatherForecast}
                      // setClicked={setClicked}
                      townInput={townInput}
                    />
                  );
                })}
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
