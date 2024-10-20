import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quote/quoteSlice";
import tasksReducer from "../features/task/tasksSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    tasks: tasksReducer,
  },
});