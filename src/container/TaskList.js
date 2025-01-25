import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Task from "../features/task/Task";

export default function TaskList() {
  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );

  const taskOrder = useSelector((state) => state.settings.order);

  const userTasks = useSelector((state) => state.tasks);
  // const gameTasks = useSelector((state) => state.game.tasks);

  let sortedTasksRef = useRef(userTasks);

  useEffect(() => {
    let sorted = [...userTasks];
    switch (taskOrder) {
      case "estimated":
        sorted.sort((a, b) => a.estimatedTime - b.estimatedTime);
        break;
      case "reward":
        sorted.sort((a, b) => a.reward - b.reward);
        break;
      default:
        sorted = userTasks;
        break;
    }

    sortedTasksRef.current = sorted;
  }, [taskOrder, userTasks]);

  const tasks = isDifficultySelected ? sortedTasksRef.current || [] : userTasks;

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
