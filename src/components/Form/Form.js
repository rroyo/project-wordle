import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Form({ onGuessing, answer, disableForm }) {
  const [guess, setGuess] = React.useState('');

  function onChangeHandler(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function submitHandler(event) {
    event.preventDefault();
    const newGuess = checkGuess(guess, answer);
    newGuess.word = guess; // Used inside Game.js logic
    onGuessing(newGuess);
    setGuess('');
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={submitHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          maxLength={5}
          title="5 letters word"
          pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
          onChange={onChangeHandler}
          value={guess}
          disabled={disableForm}
        />
      </form>
    </div>
  );
}

export default Form;
