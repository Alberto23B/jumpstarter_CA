import React from "react";
import eye from "../../app/iconmonstr-eye-thin.svg";

export default function ChangeBg() {
  // const background = document.getElementsByTagName("main");
  return (
    <button>
      <img
        src={eye}
        className="w-10 bg-white"
        alt="toggle background button"
      ></img>
    </button>
  );
}
