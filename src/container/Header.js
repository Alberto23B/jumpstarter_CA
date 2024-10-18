import React from "react";
import logo from "../app/jumpstarter_logo.png";
import eye from "../app/iconmonstr-eye-thin.svg";
export default function Header() {
  return (
    <header className="flex justify-end bg-slate-950">
      <img className="w-1/2 mx-2" src={logo} alt="logo"></img>
      {/* change bg function  */}
      <img
        src={eye}
        className="w-10 bg-white"
        alt="toggle background button"
      ></img>
    </header>
  );
}
