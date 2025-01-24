import React from "react";
import { useSelector } from "react-redux";
import Task from "../features/task/Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="mx-2">
      <ul>
        {tasks.map((task, i) => (
          <Task key={i} task={task} i={i}></Task>
        ))}
      </ul>
    </div>
  );
}
