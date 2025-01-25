import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    difficulty: "",
    isDifficultySelected: false,
    gameTasks: [],
    score: 0,
    started: false,
  },
  reducers: {
    setDifficulty: (state, action) => {
      return {
        ...state,
        difficulty: action.payload.difficulty,
        isDifficultySelected: action.payload.isDifficultySelected,
      };
    },
    startGame: (state, action) => {
      return {
        ...state,
        started: action.payload.started,
      };
    },
  },
});

export default gameSlice.reducer;
export const { setDifficulty, startGame } = gameSlice.actions;
