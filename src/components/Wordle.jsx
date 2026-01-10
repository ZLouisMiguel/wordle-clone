import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle.js";
import Grid from "./Grid.jsx";
import Keypad from "./Keypad.jsx";
import Modal from "./Modal.jsx";

const Wordle = ({ solution, onRetry }) => {
  const {
    currentGuess,
    handleKeyUp,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    resetGame,
  } = useWordle(solution);

  const [showModal, setShowModal] = useState(false);

  const handleRetry = () => {
    setShowModal(false);
    resetGame();
    onRetry();
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2500);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2500);
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <>
      <div>solution - {solution.word}</div>
      <div>Current Guess: - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} handleKeyUp = {handleKeyUp}/>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution.word}
          onRetryClick={() => {
            handleRetry();
          }}
        />
      )}
    </>
  );
};

export default Wordle;
