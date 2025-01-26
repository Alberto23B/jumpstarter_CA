import { useDispatch } from "react-redux";
import { stopGame } from "./gameSlice";

export default function StopGame() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(stopGame({ started: false, isDifficultySelected: false }));
  };

  return (
    <div className="w-full text-center">
      <button
        className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit"
        onClick={handleClick}
      >
        Stop!
      </button>
    </div>
  );
}
