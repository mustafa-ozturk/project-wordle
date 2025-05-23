import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [
      ...guesses,
      { label: tentativeGuess, id: crypto.randomUUID() },
    ];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <PreviousGuess guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
