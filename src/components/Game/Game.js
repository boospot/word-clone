import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  const addGuess = (label) => {
    if (!label) {
      return;
    }
    const newResults = [
      ...results,
      {
        label,
        id: Math.random(),
      },
    ];
    setResults(newResults);
  };

  return (
    <>
      <GuessResults results={results} setResults={setResults} />
      <GameInput addGuess={addGuess} />
    </>
  );
}

export default Game;
