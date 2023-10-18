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

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [playerWins, setPlayerWins] = React.useState(false);

  function guessHandler(guess) {
    gameHasEnded(guess.word);
    setGuesses([...guesses, guess]);
  }

  function gameHasEnded(word) {
    if (word === answer) {
      setPlayerWins(true);
      setDisabled(true);
      setGameEnded(true);
      return true;
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setPlayerWins(false);
      setDisabled(true);
      setGameEnded(true);
      return true;
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <Form onGuessing={guessHandler} answer={answer} disableForm={disabled} />
      {gameEnded ? <Banner outcome={playerWins} answer={answer} numGuess={guesses.length} /> : ''}
    </>
  );
}

export default Game;
