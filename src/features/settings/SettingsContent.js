import { clearSVG } from "../../utils/svgCollection";
import toggleSetting from "../../utils/toggleModal";
import { useDispatch } from "react-redux";
import { setOrder } from "./settingsSlice";

export default function SettingsContent({ reference }) {
  const dispatch = useDispatch();

  const handleOrderSelect = (value) => {
    dispatch(
      setOrder({
        order: value,
      })
    );
  };

  return (
    <div className="bg-black border-2 border-white w-96">
      <div className="flex justify-end text-white bg-black">
        <button onClick={() => toggleSetting(reference)}>{clearSVG}</button>
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
            onChange={(e) => handleOrderSelect("input")}
            defaultChecked
          ></input>
          <label htmlFor="input">input </label>
          <input
            type="radio"
            id="estimated"
            name="order-task"
            onChange={(e) => handleOrderSelect("estimated")}
          ></input>
          <label htmlFor="estimated">estimated </label>
          <input
            type="radio"
            id="reward"
            name="order-task"
            onChange={(e) => handleOrderSelect("reward")}
          ></input>
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
  );
}
