import React from 'react';
import { range } from '../../utils';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';

function Guess({ rowKey, guess }) {
  return (
    <>
      <p className="guess" key={rowKey} data-key={rowKey}>
        {range(NUM_OF_LETTERS_PER_WORD).map(index => (
          <span
            className={`cell${guess ? ' ' + guess[index].status : ''}`}
            key={index}
            data-key={index}
          >
            {guess ? guess[index].letter : ''}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
