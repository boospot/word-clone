import React from "react";

function GameInput({ addGuess, finalResult }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guessInput.length !== 5) {
          window.alert("Word should be 5 characters long");
          return;
        }
        addGuess(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={finalResult}
        onChange={(event) => {
          const newGuess = event.target.value;

          setGuessInput(newGuess.toUpperCase());
        }}
      />
    </form>
  );
}

export default GameInput;
