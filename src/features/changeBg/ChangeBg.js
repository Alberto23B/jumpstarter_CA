import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBg } from "./changeBgSlice";
import { eyeSVG } from "../../utils/svgCollection";

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
    <div className="pl-2">
      <p className="inline-block mx-2">Get inspired </p>
      <button onClick={handleClick}>{eyeSVG}</button>
    </div>
  );
}
