import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/task/tasksSlice";
import weatherReducer from "../features/weather/weatherSlice";
import changeBgReducer from "../features/changeBg/changeBgSlice";
import gameReducer from "../features/game/gameSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    weather: weatherReducer,
    changeBg: changeBgReducer,
    game: gameReducer,
    settings: settingsReducer,
  },
});
