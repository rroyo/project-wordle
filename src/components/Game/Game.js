import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Form from '../Form';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

//TODO: no puc fer gameEnded, no s'acaba, l'estat no està ben fet

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);
  let playerWins = false;
  let lastGuess = '';
  let disableForm = false;

  function guessHandler(guess) {
    lastGuess = guess;
    setGuesses([...guesses, guess]);
  }

  function gameHasEnded() {
    if (lastGuess === answer) {
      playerWins = true;
      disableForm = true;
      setGameEnded(true);
      return true;
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      playerWins = false;
      disableForm = true;
      setGameEnded(true);
      return true;
    }
  }

  gameHasEnded();

  return (
    <>
      <GuessResults guesses={guesses} />
      <Form onGuessing={guessHandler} answer={answer} disableForm={disableForm} />
      {gameEnded ? <Banner outcome={playerWins} answer={answer} numGuess={guesses.length} /> : ''}
    </>
  );
}

export default Game;
