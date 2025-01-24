import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./tasksSlice";
import {
  timeSVG,
  rewardSVG,
  playSVG,
  clearSVG,
} from "../../utils/svgCollection";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const totalTime = task.estimatedTime;
  const [isActive, setIsActive] = useState(false);

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
    <li key={task.id} className="flex py-5 my-2 bg-black">
      <p className="box-content w-2/5 ml-7">{task.task}</p>
      <div className="flex justify-around w-2/4 mx-2">
        {timeSVG}
        <p>
          {`${totalTime} `}
          <span>minutes</span>
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
