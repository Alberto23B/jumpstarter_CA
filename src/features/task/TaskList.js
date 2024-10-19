import React from "react";

export default function TaskList() {
  const tasks = ["task 1", "task 2", "task 3", "task 4"];

  return (
    <div className="mx-2">
      <ul>
        {tasks.map((el, i) => (
          <li key={i} className="flex justify-between py-5 my-2 bg-slate-950">
            <p>{el}</p>
            <div>
              <button>V</button>
              <button>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
