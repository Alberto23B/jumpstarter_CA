import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask } = tasksSlice.actions;
