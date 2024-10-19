import React from "react";
import "./App.css";
import Header from "../container/Header";
import WeatherContainer from "../container/WeatherContainer";
import Quote from "../features/quote/Quote";
import TaskContainer from "../container/TaskContainer";

function App() {
  return (
    <div className="">
      <Header />
      <main className="h-screen py-5">
        <div className="flex justify-around py-5 m-2 bg-opacity-70 bg-slate-950">
          <WeatherContainer />
          <Quote />
        </div>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
