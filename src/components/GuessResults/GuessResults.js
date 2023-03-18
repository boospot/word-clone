import React from "react";

import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ results }) {
  const guessesAllowedRange = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {guessesAllowedRange.map((index) => {
        const guess = results[index]
          ? results[index]
          : {
              id: Math.random(),
              label: "",
            };

        return (
          results[index] && (
            <p key={guess.id} id={guess.id} className={"guess"}>
              <Guess label={guess.label} />
            </p>
          )
        );
      })}
    </div>
  );
}

export default GuessResults;
