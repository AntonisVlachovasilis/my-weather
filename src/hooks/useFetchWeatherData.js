import React, { useState, useEffect } from "react";

export const useFetchWeatherData = (townInput) => {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    description: null,
    temp: null,
    temp_min: null,
    humidity: null,
    speed: null,
    dt_txt: null,
  });
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataCall = async () => {
      setIsLoading(true);
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${townInput}&appid=7dd19f656b3a6582816694065ba616f1`
      )
        .then((response) => response.json())
        .then((response) => {
          const {
            main: { temp, temp_min, humidity },
            weather: [{ description }],
            wind: { speed },
            dt_txt,
          } = response.list[0];

          setForecastWeatherData(response.list.slice(1, 5));
          setCurrentWeatherData({
            description,
            temp_min,
            temp,
            humidity,
            speed,
            dt_txt,
          });
          setIsLoading(false);
        });
    };
    dataCall();
  }, [townInput]);
  const { description, temp_min, temp, humidity, speed, dt_txt } =
    currentWeatherData;
  return {
    description,
    temp_min,
    temp,
    humidity,
    speed,
    isLoading,
    dt_txt,
    forecastWeatherData,
  };
};
