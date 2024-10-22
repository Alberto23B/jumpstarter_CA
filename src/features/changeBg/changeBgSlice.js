import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBg = createAsyncThunk(
  "changeBg/fetchBg",
  async (arg, thunkAPI) => {
    const response = await fetch("https://picsum.photos/1080/1350?grayscale");
    return response.url;
  }
);

const changeBgSlice = createSlice({
  name: "changeBg",
  initialState: {
    bg: "",
    isLoading: false,
    isFailedLoading: false,
    isLoaded: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBg.pending, (state) => {
        state.isLoading = true;
        state.isFailedLoading = false;
        state.isLoaded = false;
      })
      .addCase(fetchBg.rejected, (state) => {
        state.isLoading = false;
        state.isFailedLoading = true;
        state.isLoaded = false;
      })
      .addCase(fetchBg.fulfilled, (state, action) => {
        state.bg = action.payload;
        state.isLoading = false;
        state.isFailedLoading = false;
        state.isLoaded = true;
      });
  },
});

export default changeBgSlice.reducer;
