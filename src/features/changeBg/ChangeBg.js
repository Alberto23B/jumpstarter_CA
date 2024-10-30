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
    <div className="flex items-center justify-end w-1/2 my-5 bg-black bg-opacity-70 md:bg-opacity-100 md:mx-auto">
      <p className="inline-block mx-5 ">Get inspired </p>
      <button onClick={handleClick}>
        <img
          src={eye}
          className="w-10 mr-2"
          alt="toggle background button"
        ></img>
      </button>
    </div>
  );
}
