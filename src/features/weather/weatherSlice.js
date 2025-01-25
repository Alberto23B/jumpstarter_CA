import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationImg from "../../assets/location.svg";
import no_locationImg from "../../assets/no_location.svg";

const weatherKey = process.env.REACT_APP_WEATHER_KEY;
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, thunkAPI) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${weatherKey}`
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
    img: locationImg,
    location: null,
    isLoading: false,
    isFailedLoading: false,
    isLoaded: false,
  },
  reducers: {
    setImage: (state, action) => {
      return { ...state, img: action.payload.img };
    },
    getLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isFailedLoading: false,
        };
      })
      .addCase(fetchWeather.rejected, (state) => {
        return {
          ...state,
          img: no_locationImg,
          isLoading: false,
          isFailedLoading: true,
        };
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const { main } = action.payload.weather[0];
        const { name } = action.payload;
        const { temp } = action.payload.main;

        return {
          ...state,
          isLoading: false,
          isFailedLoading: false,
          isLoaded: true,
          main: main,
          temp: parseFloat(temp.toFixed(1)),
          name: name,
        };
      });
  },
});

export default weatherSlice.reducer;
export const { setImage, getLocation } = weatherSlice.actions;
