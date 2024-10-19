import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

export default function InputTask() {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const regex = /^\s+$/;

    if (!inputTask || inputTask.match(regex)) {
      alert("Please write something");
      setInputTask("");
      return;
    }

    dispatch(
      addTask({
        id: id,
        task: inputTask,
      })
    );
    setInputTask("");
  };

  return (
    <form className="flex my-5 ml-2" onSubmit={handleSubmit}>
      <input
        className="w-4/5 text-black border-2 border-black"
        type="text"
        placeholder="Add task"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      ></input>
      <button className="m-auto">✔</button>
    </form>
  );
}
