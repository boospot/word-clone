import React from "react";
import { range } from "../../utils";

function Guess({ label }) {
  const guessRange = range(0, 5);
  // console.log("Guess");
  console.log(label);
  return guessRange.map((index) => {
    return (
      <span key={index} className={"cell"}>
        {label[index]}
      </span>
    );
  });
}

export default Guess;
