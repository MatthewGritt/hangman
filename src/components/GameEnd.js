import React from "react";

const GameEnd = (props) => {
  const num = props.attempts - props.success;

  return (
    <div
      // this will show the game over screen if you win or lose.
      className={`gameEnd hide ${num === 10 ? "show" : ""} ${
        props.success === props.unique ? "show" : ""
      } `}
    >
      <div className="info">
        <div>
          {/* works out if it will show win or lose */}
          <h1>{`You ${num === 10 ? "Lose" : "Win"}`}</h1>
          <span className="showWord">{`The word was: ${props.word}`}</span>
          <button
            // resets the game and grabs a new word
            onClick={() => {
              props.setSuccess(0);
              props.setAttempts(0);
              props.setRestart(true);
              setTimeout(() => {
                props.setRestart(false);
                let randomNum = parseInt(Math.random() * 213);
                props.setWord(props.words[randomNum]);
              }, 100);
            }}
            className="again"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
