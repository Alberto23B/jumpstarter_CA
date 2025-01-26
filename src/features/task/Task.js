import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./tasksSlice";
import {
  timeSVG,
  rewardSVG,
  playSVG,
  clearSVG,
} from "../../utils/svgCollection";

export default function Task({ task, keyNum }) {
  const dispatch = useDispatch();
  const totalTime = task.estimatedTime;
  const [isActive, setIsActive] = useState(false);
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
        <button>{playSVG}</button>
        <button onClick={handleDelete} className="font-bold">
          {clearSVG}
        </button>
      </div>
    </li>
  );
}
