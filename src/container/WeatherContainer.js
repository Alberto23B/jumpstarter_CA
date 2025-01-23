import React from "react";
import WeatherDisplay from "../features/weather/WeatherDisplay";
import StartButtons from "../features/game/StartButtons";

export default function WeatherContainer() {
  return (
    <div className="z-10 flex w-4/5 m-auto">
      <WeatherDisplay />
      <StartButtons />
    </div>
  );
}
