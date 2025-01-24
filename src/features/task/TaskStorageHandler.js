import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TaskStorageHandler() {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("jumpstarter_tasks", JSON.stringify([...tasks]));
  }, [tasks]);
}
