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

export function calculateScore(task, difficulty, success) {
  switch (difficulty) {
    case "guru":
      return success ? Number(task.reward) : -1;
    default:
      return success ? Number(task.reward) : 0;
  }
}
