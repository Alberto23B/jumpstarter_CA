import { playSVGBig } from "../../utils/svgCollection";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "./gameSlice";

export default function PlayGame() {
  const dispatch = useDispatch();
  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );
  const tasks = useSelector((state) => state.tasks);

  const handleClick = () => {
    if (isDifficultySelected && tasks.length) {
      dispatch(
        startGame({
          started: true,
        })
      );
    } else if (!isDifficultySelected) {
      alert("Please select a difficulty first");
      return;
    } else {
      alert("Please insert at least one task");
    }
  };

  return <button onClick={handleClick}>{playSVGBig}</button>;
}
