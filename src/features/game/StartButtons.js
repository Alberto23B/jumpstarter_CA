import ShowInfo from "../infos/ShowInfo";
import { useDispatch } from "react-redux";
import { setDifficulty } from "./gameSlice";

export default function StartButtons() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(
      setDifficulty({
        difficulty: e.target.value,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="w-4/5 m-auto">
        <h2 className="inline">select a level:</h2>
        <ShowInfo />
      </div>
      <div className="w-full text-center">
        <button
          className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4"
          value={"chill"}
          onClick={handleClick}
        >
          Chill 🟢
        </button>
        <button
          className="px-1 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4"
          value={"motivated"}
          onClick={handleClick}
        >
          Motivated 🟡
        </button>
        <button
          className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4"
          value={"guru"}
          onClick={handleClick}
        >
          Guru 🔴
        </button>
      </div>
    </div>
  );
}
