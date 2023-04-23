import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherApp from "./WeatherApp";
import WeatherDataProvider from "./components/context/WeatherDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherDataProvider>
      <WeatherApp />
    </WeatherDataProvider>
  </React.StrictMode>
);
