import React, { useState } from "react";

const Help = () => {
  const [show, setShow] = useState("hide");

  return (
    <>
      {/* clicking on this button will show help page */}
      <button onClick={() => setShow("")} className="helpBtn">
        Help
      </button>
      <div className={`help ${show}`}>
        <div className="help-container">
          {/* clicking on this span will hide the help page */}
          <span onClick={() => setShow("hide")} className="close">
            X
          </span>
          {/* help text */}
          <b>Playing Hangman </b>
          <br />
          <br /> Hangman is an old-school favorite, a word game where the goal
          is to find the missing word. <br />
          <br /> You will be presented with several blank spaces representing
          the missing letters you need to find.
          <br />
          <br />
          Click on the letters to guess if the letter is in the word. <br />
          <br /> If your chosen letter exists in the answer, then all places
          where that letter appears will be revealed. <br />
          <br /> After you've revealed several letters, you may be able to guess
          what the answer is and fill in the remaining letters. <br />
          <br /> Be warned, whenever you guess a letter wrong, you lose a life,
          and the hangman begins to appear, piece by piece.
          <br />
          <br /> Solve the puzzle before the hangman dies.
        </div>
      </div>
    </>
  );
};

export default Help;
