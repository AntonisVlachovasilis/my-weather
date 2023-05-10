import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherDataProvider";
import Forecast from "./Forecast";

const UpperSection = () => {
  const [titleBg, setTitleBg] = useState("");
  const [bottom, setBottom] = useState("");
  const { forecastWeatherData, townInput } = useContext(WeatherContext);
  useEffect(() => {
    townInput && setTitleBg("forecastModalBg");
    townInput && setBottom("separator");
  }, [townInput]);
  return (
    <div className={`upper-section ${bottom}`}>
      <div className="heading">
        <h2 className={`modalsTitle ${titleBg}`}>National Weather</h2>
      </div>
      <div className="info-modal">
        <h3 className={`modalsTitle ${titleBg}`}>Weather Forecast</h3>
        <div className="forecast-wrapper">
          {forecastWeatherData?.map((elem) => {
            return (
              <Forecast
                temp_min={elem?.main?.temp_min}
                temp={elem?.main?.temp}
                desc={elem?.weather[0]?.description}
                windSpeed={elem?.wind?.speed}
                dt_txt={elem?.dt_txt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
