import React from "react";
import state1 from "../img/state1.GIF";
import state2 from "../img/state2.GIF";
import state3 from "../img/state3.GIF";
import state4 from "../img/state4.GIF";
import state5 from "../img/state5.GIF";
import state6 from "../img/state6.GIF";
import state7 from "../img/state7.GIF";
import state8 from "../img/state8.GIF";
import state9 from "../img/state9.GIF";
import state10 from "../img/state10.GIF";
import state11 from "../img/state11.GIF";

let images = [];
// prettier-ignore
images.push(state1, state2 ,state3, state4, state5, state6, state7, state8, state9, state10, state11,);

const HangmanPic = (props) => {
  const num = props.attempts - props.success;

  return (
    <div className="hangmanPic">
      {/* works out which image to show */}
      {images.map((pic, index) => {
        if (index === num) {
          return <img key={index} src={pic} alt="hangman" />;
        } else return null;
      })}
    </div>
  );
};

export default HangmanPic;
