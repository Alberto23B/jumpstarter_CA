import React from "react";

export default function TaskList() {
  const tasks = ["task 1", "task 2", "task 3", "task 4"];

  return (
    <div>
      <ul>
        {tasks.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
