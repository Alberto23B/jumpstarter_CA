import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { quoteKey } from "../../keys";

const quoteKey = process.env.REACT_APP_QUOTE_KEY;
export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (arg, thunkAPI) => {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=inspirational",
      {
        headers: {
          "X-Api-Key": quoteKey,
        },
      }
    );
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
