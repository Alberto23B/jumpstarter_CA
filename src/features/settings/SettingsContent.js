import { clearSVG } from "../../utils/svgCollection";
import toggleSetting from "../../utils/toggleModal";
import { useDispatch, useSelector } from "react-redux";
import { setBreak, setBreakTime, setOrder } from "./settingsSlice";

export default function SettingsContent({ reference }) {
  const dispatch = useDispatch();
  const isBreakActive = useSelector((state) => state.settings.break);
  const orderSelected = useSelector((state) => state.settings.order);

  const handleSelect = (target, value) => {
    switch (target) {
      case "order-task":
        dispatch(
          setOrder({
            order: value,
          })
        );

        break;
      case "break":
        dispatch(
          setBreak({
            break: value,
          })
        );
        break;
      case "break-time":
        dispatch(
          setBreakTime({
            breakTime: value,
          })
        );
        break;
      default: {
        alert("Unknown action");
        return;
      }
    }
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
            onChange={(e) => handleSelect(e.target.name, "input")}
            checked={orderSelected === "input"}
          ></input>
          <label htmlFor="input">input </label>
          <input
            type="radio"
            id="estimated"
            name="order-task"
            checked={orderSelected === "estimated"}
            onChange={(e) => handleSelect(e.target.name, "estimated")}
          ></input>
          <label htmlFor="estimated">estimated </label>
          <input
            type="radio"
            id="reward"
            name="order-task"
            checked={orderSelected === "reward"}
            onChange={(e) => handleSelect(e.target.name, "reward")}
          ></input>
          <label htmlFor="reward">reward </label>
        </div>
        <div className="py-5 mx-2">
          <p>pause between tasks:</p>
          <input
            type="radio"
            id="yes"
            name="break"
            checked={isBreakActive}
            onChange={(e) => handleSelect(e.target.name, true)}
          ></input>
          <label htmlFor="break">yes </label>
          <input
            type="radio"
            id="no"
            name="break"
            checked={!isBreakActive}
            onChange={(e) => handleSelect(e.target.name, false)}
          ></input>
          <label htmlFor="break">no </label>
        </div>
        <div className="py-5 mx-2">
          <label
            htmlFor="break-time"
            className={isBreakActive ? "text-white" : "text-slate-600"}
          >
            break time:
          </label>
          <select
            id="break-time"
            className="text-black"
            onChange={(e) => handleSelect(e.target.id, e.target.value)}
            disabled={!isBreakActive}
          >
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
