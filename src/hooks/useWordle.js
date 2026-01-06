import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("Formatting the guess");
  };

  const addNewGuess = () => {};

  const handleKeyUp = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (key === "Enter") {
      if (turn > 5) {
        console.log("You used all of your guesses");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("You've already tried that word");
        return;
      }

      if (currentGuess.length != 5) {
        console.log("Word must be 5 chars long");
        return;
      }

      formatGuess();
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
