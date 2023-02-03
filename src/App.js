import { useState } from "react";
import "./App.css";
import GameEnd from "./components/GameEnd";
import HangmanPic from "./components/HangmanPic";
import Help from "./components/Help";
import Word from "./components/Word";
import words from "./listOfWords";

// creating a random number
let randomNum = parseInt(Math.random() * 213);

function App() {
  const [attempts, setAttempts] = useState(0);
  const [success, setSuccess] = useState(0);
  const [restart, setRestart] = useState(false);
  const [word, setWord] = useState(words[randomNum]);

  // splits word into an array of letters
  const splitWord = word.toUpperCase().split("");
  let uniqueArr = [];

  // pushes unique letter into uniqueArr
  splitWord.forEach((letter) => {
    if (uniqueArr.indexOf(letter) === -1) uniqueArr.push(letter);
  });

  return (
    <div className="app">
      <Help />
      <div className="container">
        {/* passing down state */}
        <HangmanPic attempts={attempts} success={success} />
        <Word
          restart={restart}
          setAttempts={setAttempts}
          setSuccess={setSuccess}
          splitWord={splitWord}
        />
      </div>
      <GameEnd
        randomNum={randomNum}
        setSuccess={setSuccess}
        setAttempts={setAttempts}
        setRestart={setRestart}
        attempts={attempts}
        success={success}
        unique={uniqueArr.length}
        word={word}
        words={words}
        setWord={setWord}
      />
    </div>
  );
}

export default App;
