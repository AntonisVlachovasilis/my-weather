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
  const [multiDaysWeatherForecast, setMultiDaysWeatherForecast] = useState([]);
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

          const newData = response.list
            .reduce((acc, obj) => {
              const check = acc.some((unObj) => {
                return unObj.dt_txt.slice(0, 10) === obj.dt_txt.slice(0, 10);
              });
              if (!check) {
                const {
                  dt_txt,
                  weather: [{ description }],
                  main: { temp, temp_min },
                } = obj;
                acc.push({ dt_txt, description, temp, temp_min });
              }
              return acc;
            }, [])
            .slice(1, 5);

          console.log(newData);

          setMultiDaysWeatherForecast(newData);
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
    multiDaysWeatherForecast,
  };
};
