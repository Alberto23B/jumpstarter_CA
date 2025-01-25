import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    order: "input",
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
    setBreak: (state, action) => {
      return {
        ...state,
        break: action.payload.break,
      };
    },
    setBreakTime: (state, action) => {
      return {
        ...state,
        breakTime: action.payload.break,
      };
    },
  },
});

export default settingsSlice.reducer;
export const { setOrder, setBreak, setBreakTime } = settingsSlice.actions;
