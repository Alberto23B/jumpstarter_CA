import React from "react";
import WeatherDisplay from "../features/weather/WeatherDisplay";
import StartButtons from "../features/game/StartButtons";
import StartedGame from "../features/game/StartedGame";
import PlayGame from "../features/game/PlayGame";
import { useSelector } from "react-redux";

export default function WeatherContainer() {
  const started = useSelector((state) => state.game.started);

  return (
    <div className="z-10 flex w-11/12 m-auto">
      <WeatherDisplay />
      {started ? <StartedGame /> : <StartButtons />}
      {!started && <PlayGame />}
    </div>
  );
}
