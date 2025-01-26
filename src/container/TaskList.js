import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "../features/task/Task";
import { modifyTask } from "../utils/game";

export default function TaskList() {
  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );
  const isDescending = useSelector((state) => state.settings.descending);
  const taskOrder = useSelector((state) => state.settings.order);
  const userTasks = useSelector((state) => state.tasks);
  const difficulty = useSelector((state) => state.game.difficulty);

  const [sortedTasks, setSortedTasks] = useState(userTasks);

  useEffect(() => {
    let sorted = [...userTasks];
    const sortByEstimated = isDescending
      ? (a, b) => b.estimatedTime - a.estimatedTime
      : (a, b) => a.estimatedTime - b.estimatedTime;
    const sortByReward = isDescending
      ? (a, b) => b.reward - a.reward
      : (a, b) => a.reward - b.reward;

    switch (taskOrder) {
      case "estimated":
        sorted.sort(sortByEstimated);
        break;
      case "reward":
        sorted.sort(sortByReward);
        break;
      default:
        sorted = userTasks;
        break;
    }

    const sortedAndModified = modifyTask(sorted, difficulty);

    setSortedTasks(sortedAndModified);
  }, [taskOrder, userTasks, isDescending, difficulty]);

  const tasks = isDifficultySelected ? sortedTasks : userTasks;

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
