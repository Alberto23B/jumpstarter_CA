import React from "react";
import TaskList from "../features/task/TaskList";
import InputTask from "../features/task/InputTask";

export default function TaskContainer() {
  return (
    <div className="py-2 m-2 overflow-auto bg-black bg-opacity-70 md:bg-opacity-100 max-h-96 md:max-h-[32rem] md:w-2/3 md:m-auto scroll">
      <InputTask></InputTask>
      <TaskList></TaskList>
    </div>
  );
}
