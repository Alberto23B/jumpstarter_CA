import React from "react";
import "./App.css";
import Header from "../container/Header";
import ChangeBg from "../features/changeBg/ChangeBg";
import WeatherContainer from "../container/WeatherContainer";
import TaskContainer from "../container/TaskContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="h-screen switch none md:flex">
        <div className="hidden md:flex w-1/6 overflow-hidden leading-[10rem] break-all bg-black">
          <span className="lateral-banner text-pretty animate-v-scroll">
            JUMPSTARTERJUMPSTARTERJUMPSTARTER
          </span>
        </div>
        <main className="h-screen py-5 md:w-3/4 md:m-auto">
          <div className="relative z-10 flex justify-around py-5 m-2 bg-black md:m-auto md:w-2/3">
            <WeatherContainer />
          </div>
          <ChangeBg />
          <TaskContainer />
        </main>
        <div className="hidden md:flex w-1/6 overflow-hidden leading-[8rem] break-all bg-black">
          <span className="lateral-banner text-pretty animate-v-scroll2">
            JUMPSTARTERJUMPSTARTERJUMPSTARTER
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
