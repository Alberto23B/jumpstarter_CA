import React from "react";
import WeatherDisplay from "../features/weather/WeatherDisplay";
import StartButtons from "../features/game/StartButtons";
import StartedGame from "../features/game/StartedGame";
import PlayGame from "../features/game/PlayGame";

export default function WeatherContainer() {
  return (
    <div className="z-10 flex w-11/12 m-auto">
      <WeatherDisplay />
      <StartButtons />
      {/* <StartedGame /> */}
      <PlayGame />
    </div>
  );
}
