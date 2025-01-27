import { useState, useEffect, useRef } from "react";
import toggleModal from "../../utils/toggleModal";
import { useDispatch } from "react-redux";
import { setScore } from "../game/gameSlice";
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
      <dialog
        ref={timeUpRef}
        className="text-center text-white bg-black border-2 border-white w-96"
      >
        <h2 className="p-5 text-3xl">did you finished the task on time?</h2>
        <button
          onClick={handleYes}
          className="px-2 mx-1 mb-5 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4"
        >
          yes
        </button>
        <button
          onClick={handleNo}
          className="px-2 mx-1 mb-5 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4"
        >
          no
        </button>
      </dialog>

      <span className="text-amber-400 animate-fadeInOut">
        {timeLeft} minutes
      </span>
    </>
  );
}
