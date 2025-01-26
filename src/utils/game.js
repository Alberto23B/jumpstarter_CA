export function modifyTask(tasks, difficulty) {
  const calculateTime = (time) => {
    switch (difficulty) {
      case "motivated":
        return ((time * 90) / 100).toFixed(1);
      case "guru":
        return ((time * 80) / 100).toFixed(1);
      default:
        return time;
    }
  };

  const modifiedTasks = tasks.map((task) => ({
    ...task,
    estimatedTime: calculateTime(task.estimatedTime),
  }));

  return modifiedTasks;
}
