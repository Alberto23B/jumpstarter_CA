import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./tasksSlice";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <li key={task.id} className="flex py-5 my-2 bg-black">
      <p className="box-content w-4/5 ml-7">{task.task}</p>
      <div className="m-auto">
        {/* future feature: list of done task and deleted task */}
        {/* <button>✔</button> */}
        <button onClick={handleDelete} className="font-bold">
          &#10005;
        </button>
      </div>
    </li>
  );
}
