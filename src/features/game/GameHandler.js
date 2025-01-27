import { useSelector } from "react-redux";

export default function GameHandler({ tasks }) {
  const isStarted = useSelector((state) => state.game.started);

  if (!isStarted) {
    return;
  }
}
