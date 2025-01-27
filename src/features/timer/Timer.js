import { useState, useEffect, useRef } from "react";
import toggleModal from "../../utils/toggleModal";

export default function Timer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const timeUpRef = useRef(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 60000);

    console.log(timeLeft);
    return () => clearInterval(interval);
  }, [timeLeft]);

  if (!timeLeft) {
    toggleModal(timeUpRef);
  }

  return (
    <>
      <dialog ref={timeUpRef}>
        <h2>did you finished the task on time?</h2>
        <button>yes</button>
        <button>no</button>
      </dialog>
      <span className="text-amber-400 animate-fadeInOut">
        {timeLeft} minutes
      </span>
    </>
  );
}
