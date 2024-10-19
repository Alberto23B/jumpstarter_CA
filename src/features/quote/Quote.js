import React from "react";
import { fetchQuote } from "./quoteSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Quote() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const isLoaded = useSelector((state) => state.quote.isLoaded);

  if (isLoaded === false) {
    dispatch(fetchQuote());
  }

  return <div className="w-3/5 ">{quote}</div>;
}
