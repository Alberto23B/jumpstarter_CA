import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function InputTask() {
  return (
    <div className="flex my-5 ml-2">
      <input
        className="w-4/5 border-2 border-black"
        type="text"
        placeholder="Add task"
      ></input>
      <button className="m-auto">V</button>
    </div>
  );
}
