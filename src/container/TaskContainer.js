import React from "react";
import TaskList from "../features/task/TaskList";
import InputTask from "../features/task/InputTask";

export default function TaskContainer() {
  return (
    <div className="py-2 m-2 bg-slate-950 bg-opacity-70">
      <InputTask></InputTask>
      <TaskList></TaskList>
    </div>
  );
}
