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
  },
});

export default gameSlice.reducer;
export const { setDifficulty } = gameSlice.actions;
