import React from "react";
import "./App.css";
import Header from "../container/Header";
import ChangeBg from "../features/changeBg/ChangeBg";
import WeatherContainer from "../container/WeatherContainer";
import Quote from "../features/quote/Quote";
import TaskContainer from "../container/TaskContainer";

function App() {
  return (
    <div className="">
      <Header />
      <main className="h-screen py-5">
        <div className="relative z-10 flex justify-around py-5 m-2 bg-black bg-opacity-70">
          <WeatherContainer />
          <Quote />
        </div>
        <ChangeBg />
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
