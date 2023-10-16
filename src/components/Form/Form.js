import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Form({ onGuessing, answer, disableForm }) {
  const [guess, setGuess] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);

  function onChangeHandler(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function submitHandler(event) {
    event.preventDefault();
    const newGuess = checkGuess(guess, answer);
    onGuessing(newGuess);
    setDisabled(disableForm);
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
          disabled={disabled}
        />
      </form>
    </div>
  );
}

export default Form;
