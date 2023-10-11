import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function guessHandler(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <Form onGuessing={guessHandler} />
    </>
  );
}

export default Game;
