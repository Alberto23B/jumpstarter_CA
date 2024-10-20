import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import location from "../../assets/location.svg";
import no_location from "../../assets/no_location.svg";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (arg, thunkAPI) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.4641943&lon=9.1896346&appid=e4aebde6bb5813252a8e82301fc7a1e4"
    );
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    main: "",
    temp: 0,
    name: "",
    img: location,
    isLoading: false,
    isFailedLoading: false,
    isFulfilled: false,
  },
  reducers: {
    setImage: (state, action) => {
      console.log(action);

      state.img = action.payload.img;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
        state.isFailedLoading = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.img = no_location;
        state.isLoading = false;
        state.isFailedLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        console.log(action);
        const { main } = action.payload.weather[0];
        const { name } = action.payload;
        const { temp } = action.payload.main;
        state.isLoading = false;
        state.isFailedLoading = false;
        state.isFulfilled = true;
        state.main = main;
        state.temp = temp;
        state.name = name;
      });
  },
});

export default weatherSlice.reducer;
export const { setImage } = weatherSlice.actions;
