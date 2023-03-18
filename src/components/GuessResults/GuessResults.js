import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ id, label }) => {
        return (
          <p key={id} className="guess">
            {label}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
