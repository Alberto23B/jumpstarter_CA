import React from "react";
import TaskList from "../features/task/TaskList";
import InputTask from "../features/task/InputTask";

export default function TaskContainer() {
  return (
    <div className="z-10 py-2 m-2 overflow-scroll bg-black bg-opacity-70 max-h-96">
      <InputTask></InputTask>
      <TaskList></TaskList>
    </div>
  );
}
