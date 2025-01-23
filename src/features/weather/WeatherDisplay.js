import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./weatherSlice";
import { weatherImg } from "./weatherImg";
import useGeolocation from "../../utils/useGeolocation";
import { setImage, getLocation } from "./weatherSlice";
import locationImg from "../../assets/location.svg";

export default function WeatherDisplay() {
  const dispatch = useDispatch();
  const location = useGeolocation();
  const isLocationLoaded = location.loaded;
  const weatherData = useSelector((state) => state.weather);
  const img = weatherImg.filter(
    (el) => el.main === weatherData.main.toLowerCase()
  );
  const isLoaded = useSelector((state) => state.weather.isLoaded);

  useEffect(() => {
    if (isLocationLoaded) {
      dispatch(getLocation(location));
      dispatch(fetchWeather(location));
    }
  }, [isLocationLoaded, location]);

  useEffect(() => {
    if (isLoaded) {
      dispatch(setImage({ img: img[0]?.url ? img[0].url : locationImg }));
    }
  }, [isLoaded]);

  return (
    <div className="text-center">
      <img
        src={weatherData.img}
        className="w-6 m-auto weather"
        alt="weather logo"
      ></img>
      <p className="text-sm">{weatherData.temp} °C</p>
      <p className="text-sm">
        {location.loaded ? weatherData.name : "Allow for Location"}
      </p>
    </div>
  );
}
