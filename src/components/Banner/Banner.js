import React from 'react';

function Banner({ answer, numGuess, outcome }) {
  const win = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {numGuess} {numGuess === 1 ? `guess` : `guesses`}
        </strong>
        .
      </p>
    </div>
  );

  const lose = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return <>{outcome ? win : lose}</>;
}

export default Banner;
