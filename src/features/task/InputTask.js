import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./tasksSlice";
import validateTime from "../../utils/validateTime";

export default function InputTask() {
  const [inputTask, setInputTask] = useState("");
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [estimatedMinutes, setEstimatedMinutes] = useState(0);
  const [reward, setReward] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const regex = /^\s+$/;

    const totalTime = validateTime(estimatedHours, estimatedMinutes);

    if (!inputTask || inputTask.match(regex)) {
      alert("Please write something");
      setInputTask("");
      return;
    }

    if (!totalTime) {
      alert("A 0 estimated time is not valid");
      return;
    }

    dispatch(
      addTask({
        id: id,
        task: inputTask,
        estimatedTime: totalTime,
        reward: reward,
      })
    );
    setInputTask("");
  };

  return (
    <div className="flex">
      <form
        className="flex flex-col w-5/6 my-5 ml-2"
        onSubmit={handleSubmit}
        id="input-task"
      >
        <div className="w-full text-center">
          <input
            className="w-5/6 ml-2 text-black border-2 border-black"
            type="text"
            placeholder="Add task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          ></input>
        </div>
        <div className="pt-2 mx-auto text-center w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="hidden md:inline">Estimated:</p>
          <label htmlFor="set-hours">h:</label>
          <select
            id="set-hours"
            className="text-black"
            onChange={(e) => setEstimatedHours(e.target.value)}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <label htmlFor="set-minutes">m:</label>
          <select
            id="set-minutes"
            className="text-black"
            onChange={(e) => setEstimatedMinutes(e.target.value)}
          >
            <option value={0}>0</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={35}>35</option>
            <option value={40}>40</option>
            <option value={45}>45</option>
            <option value={50}>50</option>
            <option value={55}>55</option>
            <option value={60}>60</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p className="hidden md:inline">Reward:</p>
          <select
            name="set-reward"
            id="set-reward"
            className="text-black border-black"
            value={reward}
            onChange={(e) => setReward(Number(e.target.value))}
          >
            <option value={1}>&#x2605;</option>
            <option value={2}>&#x2605;&#x2605;</option>
            <option value={3}>&#x2605;&#x2605;&#x2605;</option>
          </select>
        </div>
      </form>
      <button
        className="m-auto text-4xl font-bold"
        type="submit"
        form="input-task"
      >
        &#xFF0B;
      </button>
    </div>
  );
}
