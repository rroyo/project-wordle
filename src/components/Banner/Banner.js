import React from 'react';

function Banner({ answer, numGuess, outcome }) {
  const win = (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuess} guesses</strong>.
      </p>
    </div>
  );

  const lose = (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return <>{outcome ? win : lose}</>;
}

export default Banner;
