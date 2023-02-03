import React, { useRef } from "react";

const Letter = (props) => {
  const letterRef = useRef();
  // array of ids
  let arr = props.splitWord.map((letter) => letter.charCodeAt() - 65);

  // removes "clicked" class if play again is clicked
  if (props.restart) {
    letterRef.current.className = "letter";
  }

  return (
    <div>
      <div
        ref={letterRef}
        id={props.id}
        onClick={() => {
          //  if arr contains index then it means a successful guess
          if (arr.indexOf(props.id) !== -1)
            props.setSuccess((prev) => prev + 1);

          // updates state
          props.setAttempts((prev) => prev + 1);
          letterRef.current.className = "letter clicked";
          props.setClickedId(props.id + 1);
        }}
        className="letter"
      >
        {props.letter}
      </div>
    </div>
  );
};

export default Letter;
