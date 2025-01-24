import React from "react";
import TaskList from "../features/task/TaskList";
import InputTask from "../features/task/InputTask";
import TaskStorageHandler from "../features/task/TaskStorageHandler";

export default function TaskContainer() {
  return (
    <div className="py-2 m-2 overflow-auto bg-black max-h-96 md:max-h-[28rem] md:w-2/3 md:m-auto scroll">
      <InputTask></InputTask>
      <TaskList></TaskList>
      <TaskStorageHandler />
    </div>
  );
}
