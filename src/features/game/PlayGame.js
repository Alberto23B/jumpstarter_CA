import { playSVGBig } from "../../utils/svgCollection";
import { useDispatch } from "react-redux";
import { startGame } from "./gameSlice";

export default function PlayGame() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      startGame({
        started: true,
      })
    );
  };

  return <button onClick={handleClick}>{playSVGBig}</button>;
}
