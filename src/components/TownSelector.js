import React, { useContext } from "react";
import { WeatherContext } from "./context/WeatherDataProvider";

const TownSelector = () => {
  const towns = ["Athens", "Thessaloniki", "Patra", "Larisa", "Chania"];
  const { setTownInput } = useContext(WeatherContext);
  return (
    <select
      name="town-selector"
      id="name-selector"
      onChange={(e) => setTownInput(e.target.value)}
    >
      <option value="">Please choose a town</option>
      {towns.map((town) => (
        <option value={town}>{town}</option>
      ))}
    </select>
  );
};
export default TownSelector;
