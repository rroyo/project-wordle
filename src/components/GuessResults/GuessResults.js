import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(guess => {
        <p className="guess">
          {guess.map(({ letter, key }) => {
            <span className="cell" key={key}>
              {letter}
            </span>;
          })}
          );
        </p>;
      })}
    </div>
  );
}

export default GuessResults;
