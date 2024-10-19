import React from "react";
import sun from "../../assets/sun_mockup.webp";
export default function WeatherDisplay() {
  return (
    <div>
      <img src={sun} className="w-10"></img>
      <p>32 C°</p>
    </div>
  );
}
