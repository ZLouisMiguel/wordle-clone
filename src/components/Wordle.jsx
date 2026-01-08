import { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, turn , isCorrect } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(()=>{
    console.log(guesses, turn , isCorrect);
  },[guesses , turn , isCorrect]);
  return (
    <>
      <div>solution - {solution.word}</div>
      <div>Current Guess: - {currentGuess}</div>
    </>
  );
};

export default Wordle;
