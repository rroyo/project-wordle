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
    newGuess.word = guess;
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
          pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
          title="5 letter word"
          onChange={onChangeHandler}
          value={guess}
          disabled={disableForm}
        />
      </form>
    </div>
  );
}

export default Form;
