import { useRef, useState } from "react";
import { settingSVG } from "../../utils/svgCollection";
import toggleSetting from "../../utils/toggleModal";
import SettingsContent from "./SettingsContent";

export default function ShowSettings() {
  const settingRef = useRef(null);

  return (
    <>
      <dialog ref={settingRef}>
        <SettingsContent reference={settingRef} />
      </dialog>
      <div className="pr-2 my-auto">
        <button className="inline" onClick={() => toggleSetting(settingRef)}>
          {settingSVG}
        </button>
        <p className="inline mx-2">customize</p>
      </div>
    </>
  );
}
