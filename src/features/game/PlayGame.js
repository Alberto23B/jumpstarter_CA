import { playSVGBig } from "../../utils/svgCollection";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "./gameSlice";

export default function PlayGame() {
  const dispatch = useDispatch();
  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );

  const handleClick = () => {
    if (isDifficultySelected) {
      dispatch(
        startGame({
          started: true,
        })
      );
    } else {
      alert("Please select a difficulty first");
      return;
    }
  };

  return <button onClick={handleClick}>{playSVGBig}</button>;
}
