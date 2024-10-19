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
      <main>
        <div className="flex">
          <WeatherContainer />
          <Quote />
        </div>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
