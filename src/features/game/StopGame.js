import { useDispatch, useSelector } from "react-redux";
import { stopGame } from "./gameSlice";
import toggleModal from "../../utils/toggleModal";
import { useRef } from "react";

export default function StopGame() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.game.score);

  const endGameRef = useRef(null);

  const handleClick = () => {
    toggleModal(endGameRef);
    alert(`Your score is ${score}`);
    dispatch(
      stopGame({ started: false, isDifficultySelected: false, score: 0 })
    );
  };

  return (
    <div className="w-full text-center">
      <dialog ref={endGameRef} className="bg-black border-2 border-white w-96">
        <p>{`your score is ${score}!`}</p>
        <button onClick={() => toggleModal(endGameRef)}>Ok</button>
      </dialog>
      <button
        className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit"
        onClick={handleClick}
      >
        Stop!
      </button>
    </div>
  );
}
