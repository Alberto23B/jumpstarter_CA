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
        return {
          ...state,
          isLoading: true,
          isFailedLoading: false,
          isLoaded: false,
        };
      })
      .addCase(fetchBg.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
          isFailedLoading: true,
          isLoaded: false,
        };
      })
      .addCase(fetchBg.fulfilled, (state, action) => {
        return {
          isLoading: false,
          isFailedLoading: false,
          isLoaded: true,
          bg: action.payload,
        };
      });
  },
});

export default changeBgSlice.reducer;
