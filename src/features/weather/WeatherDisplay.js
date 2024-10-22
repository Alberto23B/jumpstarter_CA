import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./weatherSlice";
import { weatherImg } from "./weatherImg";
import { setImage } from "./weatherSlice";
import location from "../../assets/location.svg";

export default function WeatherDisplay() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const img = weatherImg.filter(
    (el) => el.main === weatherData.main.toLowerCase()
  );
  const isLoaded = useSelector((state) => state.weather.isLoaded);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  useEffect(() => {
    if (isLoaded) {
      dispatch(setImage({ img: img[0]?.url ? img[0].url : location }));
    }
  }, [isLoaded]);

  return (
    <div>
      <img src={weatherData.img} className="w-10" alt="weather logo"></img>
      <p>{weatherData.temp} °C</p>
      <p>{weatherData.name}</p>
    </div>
  );
}
