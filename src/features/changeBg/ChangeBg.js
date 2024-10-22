import React from "react";
import eye from "../../assets/change_bg.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBg } from "./changeBgSlice";

export default function ChangeBg() {
  const background = document.getElementsByTagName("main");
  const stateBg = useSelector((state) => state.changeBg.bg);
  const isLoaded = useSelector((state) => state.changeBg.isLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBg());
  }, []);

  useEffect(() => {
    if (isLoaded) {
      background[0].style = `background-image: url(${stateBg})`;
    }
  }, [isLoaded]);

  const handleClick = () => {
    dispatch(fetchBg());
    background[0].style = `background-image: url(${stateBg})`;
  };

  return (
    <button onClick={handleClick}>
      <img
        src={eye}
        className="w-10 bg-white"
        alt="toggle background button"
      ></img>
    </button>
  );
}
