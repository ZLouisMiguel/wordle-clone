import { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";
import Grid from "./Grid.jsx";
import Keypad from "./Keypad.jsx";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      console.log("Congrats, You Win !");
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      console.log("You've exhausted your guesses ");
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect , turn]);

  return (
    <>
      <div>solution - {solution.word}</div>
      <div>Current Guess: - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </>
  );
};

export default Wordle;
