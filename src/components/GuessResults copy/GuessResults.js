import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  const guessesList = guesses.map((guess, index) => (
    <p className="guess" key={index} data-key={index}>
      {guess.map(({ letter, key }) => (
        <span className="cell" key={key}>
          {letter}
        </span>
      ))}
    </p>
  ));

  const emptyRows = range(guesses.length, NUM_OF_GUESSES_ALLOWED).map(row => (
    <p className="guess" key={row} data-key={row}>
      {range(5).map(cell => (
        <span className="cell" key={cell} data-key={cell}></span>
      ))}
    </p>
  ));

  return (
    <div className="guess-results">
      {guessesList}
      {emptyRows}
    </div>
  );
}

export default GuessResults;
