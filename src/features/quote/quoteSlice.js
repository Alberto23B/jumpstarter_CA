import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (arg, thunkAPI) => {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "0GdB7XyxNr4k0W1SI1gAUA==PRX5Pfeh59RD4qwc",
      },
    });
    const data = await response.json();
    return data[0].quote;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    isLoading: false,
    isLoaded: false,
    isFailedLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      state.isLoading = true;
      state.isLoaded = false;
      state.isFailedLoading = false;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isFailedLoading = false;
      state.quote = action.payload;
    });
    builder.addCase(fetchQuote.rejected, (state) => {
      state.isLoading = false;
      state.isLoaded = false;
      state.isFailedLoading = true;
    });
  },
});

export default quoteSlice.reducer;
