import { useState, useEffect, useRef } from "react";
import toggleModal from "../../utils/toggleModal";
import { useDispatch } from "react-redux";
import { setScore, stopGame } from "../game/gameSlice";
import { deleteTask } from "../task/tasksSlice";
import { calculateScore } from "../../utils/game";

export default function Timer({ initialTime, task, difficulty }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const timeUpRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialTime > 0) {
      setTimeLeft(initialTime);
    }
  }, [initialTime, task.id]);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const correctTime = (Math.round(prevTime * 100) / 100).toFixed(1);
        return Math.max((correctTime * 10 - 1) / 10, 0);
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      toggleModal(timeUpRef);
    }
  }, [timeLeft]);

  const handleYes = () => {
    dispatch(setScore({ score: calculateScore(task, difficulty, true) }));
    dispatch(deleteTask({ id: task.id }));
    toggleModal(timeUpRef);
  };

  const handleNo = () => {
    dispatch(setScore({ score: calculateScore(task, difficulty, false) }));
    dispatch(deleteTask({ id: task.id }));
    toggleModal(timeUpRef);
  };

  return (
    <>
      <dialog ref={timeUpRef}>
        <h2>did you finished the task on time?</h2>
        <button onClick={handleYes}>yes</button>
        <button onClick={handleNo}>no</button>
      </dialog>

      <span className="text-amber-400 animate-fadeInOut">
        {timeLeft} minutes
      </span>
    </>
  );
}
