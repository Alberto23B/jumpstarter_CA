import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    difficulty: "",
    isDifficultySelected: false,
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
    stopGame: (state, action) => {
      return {
        ...state,
        isDifficultySelected: action.payload.isDifficultySelected,
        started: action.payload.started,
      };
    },
    setScore: (state, action) => {
      console.log(state.score, action.payload.score);
      return {
        ...state,
        score: state.score + action.payload.score,
      };
    },
  },
});

export default gameSlice.reducer;
export const { setDifficulty, startGame, stopGame, setScore } =
  gameSlice.actions;
