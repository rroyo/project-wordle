import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';

function Form({ onGuessing }) {
  const [guess, setGuess] = React.useState('');

  function onChangeHandler(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function splitInLetters() {
    return guess.split('').map(letter => ({
      letter,
      key: crypto.randomUUID(),
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onGuessing(splitInLetters(guess));
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
          onChange={onChangeHandler}
          value={guess}
        />
      </form>
    </div>
  );
}

export default Form;
