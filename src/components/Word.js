import React, { useEffect, useState } from "react";
import Letter from "./Letter";

// creates an array of the alphabet in capitals
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

const Word = (props) => {
  const [clickedId, setClickedId] = useState(0);

  // resets clikedId when play again is clicked
  useEffect(() => {
    setClickedId(0);
  }, [props.restart]);

  return (
    <div className="word">
      <h2>
        {/* mapping through splitWord and creating a span for every letter */}
        {props.splitWord.map((letter, index) => {
          index = index + 1;

          // if restart is true then show ids are removed
          if (props.restart) {
            const element = document.getElementsByClassName(index);
            element.id = "";
            element[0].id = "";
            return (
              <span className={index} key={index}>
                {" "}
                _{" "}
              </span>
            );
          }

          // if restart is false
          // creating an id to match with the clickedId
          const letterId = letter.charCodeAt() - 64;

          //  if letterId = clickedId then the id show is added
          if (letterId === clickedId) {
            const element = document.getElementsByClassName(index);
            element.id = "show";

            //add id onto span element for styling
            element[0].id = "show";
          }

          // if the element has the id "show" then the letter is shown otherwise _ is shown
          return (
            <span className={index} key={index}>
              {document.getElementsByClassName(index).id === "show"
                ? letter
                : " _ "}
            </span>
          );
        })}
      </h2>

      {/* letters div */}
      <div className="letters">
        {alphabet.map((item, index) => {
          return (
            <Letter
              key={index}
              id={index}
              setClickedId={setClickedId}
              setSuccess={props.setSuccess}
              letter={item}
              setAttempts={props.setAttempts}
              splitWord={props.splitWord}
              restart={props.restart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Word;
