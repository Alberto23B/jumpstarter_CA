import React from "react";
import logo from "../app/jumpstarter_logo.png";
import ChangeBg from "../features/changeBg/ChangeBg";

export default function Header() {
  return (
    <header className="flex justify-end bg-slate-950">
      <img className="w-1/2 mx-2" src={logo} alt="logo"></img>
      {/* change bg function  */}
      <ChangeBg />
    </header>
  );
}
