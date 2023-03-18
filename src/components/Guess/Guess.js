import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ label, answer }) {
  const guessRange = range(0, 5);
  // console.log("Guess");

  const guessResult = checkGuess(label, answer);

  return guessRange.map((index) => {
    const classNameResult = guessResult ? guessResult[index].status : "";
    return (
      <span key={index} className={`cell ${classNameResult}`}>
        {label[index] ? label[index] : ""}
      </span>
    );
  });
}

export default Guess;
