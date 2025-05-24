import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import Guess from "../Guess/Guess";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [foundAnswer, setFoundAnswer] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [
      ...guesses,
      { guess: checkGuess(tentativeGuess, answer), id: crypto.randomUUID() },
    ];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setFoundAnswer(true);
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      {foundAnswer ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      ) : guesses.length === 6 ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : (
        <GuessInput handleSubmitGuess={handleSubmitGuess} />
      )}
    </>
  );
}

export default Game;
