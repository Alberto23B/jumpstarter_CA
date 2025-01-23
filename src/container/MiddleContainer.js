import React from "react";
import ChangeBg from "../features/changeBg/ChangeBg";
import OpenSettings from "../features/settings/OpenSettings";

export default function MiddleContainer() {
  return (
    <div className="flex items-center justify-between px-4 py-2 my-5 align-middle bg-black w-max md:w-1/2 md:mx-auto">
      <OpenSettings />
      <ChangeBg />
    </div>
  );
}
