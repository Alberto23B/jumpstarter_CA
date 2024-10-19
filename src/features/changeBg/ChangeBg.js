import React from "react";
import eye from "../../assets/change_bg.png";

export default function ChangeBg() {
  const background = document.getElementsByTagName("main");

  return (
    <button
      onClick={() => {
        background[0].style =
          "background-image: url('https://ilbolive.unipd.it/sites/default/files/2020-05/natura-alberi.jpg');";
      }}
    >
      <img
        src={eye}
        className="w-10 bg-white"
        alt="toggle background button"
      ></img>
    </button>
  );
}
