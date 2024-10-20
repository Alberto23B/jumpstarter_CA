import React from "react";
import { useEffect } from "react";
import { fetchQuote } from "./quoteSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Quote() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const isLoaded = useSelector((state) => state.quote.isLoaded);
  const isLoading = useSelector((state) => state.quote.isLoading);

  // useEffect(() => {
  //   if (isLoaded === false) {
  //     dispatch(fetchQuote());
  //   }
  // }, [dispatch, isLoaded]);

  return <div className="w-3/5 ">{isLoading ? "Loading" : quote}</div>;
}
