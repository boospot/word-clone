import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [results, setResults] = React.useState([]);

  // Pick a random word on every pageload.
  const [answer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [success, setSuccess] = React.useState(null);

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
    if (label === answer) {
      setSuccess(true);
    }
    setResults(newResults);
  };

  const isFinalResult = function () {
    if (success) {
      return true;
    } else if (results.length && results.length === NUM_OF_GUESSES_ALLOWED) {
      return true;
    }
    return false;
  };

  const finalResult = isFinalResult();

  return (
    <>
      {finalResult && (
        <Banner success={success} answer={answer} guessCount={results.length} />
      )}
      {!finalResult && (
        <GuessResults
          results={results}
          setResults={setResults}
          answer={answer}
        />
      )}
      <GameInput addGuess={addGuess} finalResult={finalResult} />
    </>
  );
}

export default Game;
