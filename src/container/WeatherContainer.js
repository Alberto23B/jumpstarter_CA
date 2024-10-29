import React from "react";
import WeatherDisplay from "../features/weather/WeatherDisplay";

export default function WeatherContainer() {
  return (
    <div className="z-10 w-1/5 m-auto">
      <WeatherDisplay />
    </div>
  );
}
