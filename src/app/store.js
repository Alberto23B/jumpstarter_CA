import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quote/quoteSlice";
import tasksReducer from "../features/task/tasksSlice";
import weatherReducer from "../features/weather/weatherSlice";
import changeBgReducer from "../features/changeBg/changeBgSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    tasks: tasksReducer,
    weather: weatherReducer,
    changeBg: changeBgReducer,
  },
});
