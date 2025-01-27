import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./tasksSlice";
import {
  timeSVG,
  rewardSVG,
  clearSVG,
  checkSVG,
} from "../../utils/svgCollection";

export default function Task({ task, keyNum }) {
  const dispatch = useDispatch();
  const totalTime = task.estimatedTime;
  const [completed, setCompleted] = useState(false);
  const isGameStarted = useSelector((state) => state.game.started);
  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );

  const displayReward = (value) => {
    const display = [];
    for (let i = 0; i < value; i++) {
      display.push(true);
    }
    return display;
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  const handleComplete = () => {};

  return (
    <li key={keyNum} className="flex py-5 my-2 bg-black">
      <p className="box-content w-2/5 ml-7">{task.task}</p>
      <div className="flex justify-around w-2/4 mx-2">
        {timeSVG}
        <p className={isDifficultySelected ? "text-amber-400" : ""}>
          {`${totalTime} `}
          <span>minutes</span>
        </p>
        <p
          className={isGameStarted && !keyNum ? "animate-fadeInOut" : "hidden "}
        >
          🟢
        </p>
        <div>
          {displayReward(task.reward).map((task) => {
            return rewardSVG;
          })}
        </div>
      </div>
      <div className="m-auto">
        <button
          onClick={handleDelete}
          className={isGameStarted && !keyNum ? "font-bold" : "hidden"}
        >
          {checkSVG}
        </button>
        <button
          onClick={handleComplete}
          className={isGameStarted && keyNum ? "font-bold" : "hidden"}
        >
          {clearSVG}
        </button>
      </div>
    </li>
  );
}
