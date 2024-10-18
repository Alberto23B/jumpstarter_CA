import React from "react";
import "./App.css";
import Header from "../container/Header";
import InputTask from "../features/task/InputTask";
import WeatherContainer from "../container/WeatherContainer";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="flex">
          <WeatherContainer />
          {/* quote component  */}
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
        <InputTask />
      </main>
    </div>
  );
}

export default App;
