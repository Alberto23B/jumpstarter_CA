import { createSlice } from "@reduxjs/toolkit";
import { loadGameTasks } from "../../utils/game";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    difficulty: "",
    gameTasks: [],
    score: 0,
    started: false,
  },
  reducers: {
    setDifficulty: (state, action) => {
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };
    },
  },
});

export default gameSlice.reducer;
export const { setDifficulty } = gameSlice.actions;
