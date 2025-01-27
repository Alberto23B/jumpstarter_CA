import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: JSON.parse(localStorage.getItem("jumpstarter_tasks") || "[]"),
  reducers: {
    addTask: (state, action) => {
      // state.push(action.payload);
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask } = tasksSlice.actions;
