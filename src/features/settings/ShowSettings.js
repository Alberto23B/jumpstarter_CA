import { useRef, useState } from "react";
import { settingSVG, clearSVG } from "../../utils/svgCollection";

export default function ShowSettings() {
  const settingRef = useRef(null);
  const [breakHours, setBreakHours] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);

  const toggleSetting = () => {
    if (!settingRef.current) {
      return;
    }
    settingRef.current.hasAttribute("open")
      ? settingRef.current.close()
      : settingRef.current.showModal();
  };

  return (
    <>
      <dialog ref={settingRef}>
        <div className="bg-black border-2 border-white w-96">
          <div
            className="flex justify-end text-white bg-black"
            onClick={toggleSetting}
          >
            {clearSVG}
          </div>
          <div className="mx-auto text-white">
            <div>
              <h2 className="p-5 text-2xl text-center">settings</h2>
            </div>
            <div className="py-5 mx-2">
              <p>order task:</p>
              <input
                type="radio"
                id="input"
                name="order-task"
                defaultChecked
              ></input>
              <label htmlFor="input">input </label>
              <input type="radio" id="estimated" name="order-task"></input>
              <label htmlFor="estimated">estimated </label>
              <input type="radio" id="reward" name="order-task"></input>
              <label htmlFor="reward">reward </label>
            </div>
            <div className="py-5 mx-2">
              <p>pause between tasks:</p>
              <input type="radio" id="yes" name="pause" defaultChecked></input>
              <label htmlFor="input">yes </label>
              <input type="radio" id="no" name="pause"></input>
              <label htmlFor="estimated">no </label>
            </div>
            <div className="py-5 mx-2">
              <label htmlFor="break-time">break time:</label>
              <select id="break-time" className="text-black">
                <option value={0}>0</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>
        </div>
      </dialog>
      <div className="pr-2 my-auto">
        <button className="inline" onClick={toggleSetting}>
          {settingSVG}
        </button>
        <p className="inline mx-2">customize</p>
      </div>
    </>
  );
}
