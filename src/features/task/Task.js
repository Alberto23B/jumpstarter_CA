import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./tasksSlice";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <li key={task.id} className="flex justify-between py-5 my-2 bg-slate-950">
      <p>{task.task}</p>
      <div>
        {/* future feature: list of done task and deleted task */}
        {/* <button>✔</button> */}
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
}
