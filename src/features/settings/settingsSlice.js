import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    order: "input",
    descending: false,
    break: false,
    breakTime: 0,
  },
  reducers: {
    setOrder: (state, action) => {
      return {
        ...state,
        order: action.payload.order,
      };
    },
    setDescending: (state, action) => {
      return {
        ...state,
        descending: action.payload.descending,
      };
    },
    setBreak: (state, action) => {
      return {
        ...state,
        break: action.payload.break,
      };
    },
    setBreakTime: (state, action) => {
      return {
        ...state,
        breakTime: Number(action.payload.breakTime),
      };
    },
  },
});

export default settingsSlice.reducer;
export const { setOrder, setDescending, setBreak, setBreakTime } =
  settingsSlice.actions;
