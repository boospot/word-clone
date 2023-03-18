import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import GuessResults from "../GuessResults";

function Game() {
  const [results, setResults] = React.useState([
    { label: "VENOM", id: 123 },
    { label: "SWEET", id: 456 },
  ]);

  // Pick a random word on every pageload.
  const [answer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

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
      <GuessResults results={results} setResults={setResults} answer={answer} />
      <GameInput addGuess={addGuess} />
    </>
  );
}

export default Game;
