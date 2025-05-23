import React from "react";

function PreviousGuess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuess;
