import React from "react";
import TaskList from "../features/task/TaskList";
import InputTask from "../features/task/InputTask";

export default function TaskContainer() {
  return (
    <div>
      <InputTask></InputTask>
      <TaskList></TaskList>
    </div>
  );
}
