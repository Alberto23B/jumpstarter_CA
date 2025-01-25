import ShowInfo from "../infos/ShowInfo";
import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "./gameSlice";
import { useState } from "react";

export default function StartButtons() {
  const dispatch = useDispatch();
  const [activeButtons, setActiveButtons] = useState({
    chill: false,
    motivated: false,
    guru: false,
  });

  const isDifficultySelected = useSelector(
    (state) => state.game.isDifficultySelected
  );

  const buttonStyling = {
    active:
      "px-2 mx-1 text-sm border-2 border-amber-400 rounded-lg w-fit xl:w-1/4",
    inactive:
      "px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4",
  };

  const handleClick = (e) => {
    if (isDifficultySelected && activeButtons[e.target.value]) {
      dispatch(
        setDifficulty({
          difficulty: "",
          isDifficultySelected: false,
        })
      );
    } else if (isDifficultySelected) {
      dispatch(
        setDifficulty({
          difficulty: e.target.value,
          isDifficultySelected: true,
        })
      );
    } else {
      dispatch(
        setDifficulty({
          difficulty: e.target.value,
          isDifficultySelected: true,
        })
      );
    }
    setActiveButtons((prevStatus) => {
      const updatedButtons = {};
      for (const key in prevStatus) {
        updatedButtons[key] = key === e.target.value;
      }
      return updatedButtons;
    });
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="w-4/5 m-auto">
        <h2 className="inline">select a level:</h2>
        <ShowInfo />
      </div>
      <div className="w-full text-center">
        <button
          className={
            activeButtons.chill && isDifficultySelected
              ? buttonStyling.active
              : buttonStyling.inactive
          }
          value={"chill"}
          onClick={handleClick}
        >
          Chill 🟢
        </button>
        <button
          className={
            activeButtons.motivated && isDifficultySelected
              ? buttonStyling.active
              : buttonStyling.inactive
          }
          value={"motivated"}
          onClick={handleClick}
        >
          Motivated 🟡
        </button>
        <button
          className={
            activeButtons.guru && isDifficultySelected
              ? buttonStyling.active
              : buttonStyling.inactive
          }
          value={"guru"}
          onClick={handleClick}
        >
          Guru 🔴
        </button>
      </div>
    </div>
  );
}
