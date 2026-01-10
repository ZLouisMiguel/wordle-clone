import { useState, useCallback } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = [...solution.word];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "gray" };
    });

    formattedGuess.forEach((letter, index) => {
      if (solutionArray[index] === letter.key) {
        letter.color = "green";
        solutionArray[index] = null;
      }
    });

    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color != "green") {
        letter.color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess.toLowerCase() === solution.word.toLowerCase()) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor != "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "gray" &&
          currentColor != "green" &&
          currentColor != "yellow"
        ) {
          newKeys[letter.key] = "gray";
          return;
        }
      });

      return newKeys;
    });

    setCurrentGuess("");
  };

  const handleKeyUp = useCallback(
    ({ key }) => {
      if (key === "↵") key = "Enter";
      if (key === "←") key = "Backspace";

      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (key === "Enter") {
        if (turn > 5) return;
        if (history.includes(currentGuess)) return;
        if (currentGuess.length !== 5) return;

        const formatted = formatGuess();
        addNewGuess(formatted);
        return;
      }

      if (/^[A-Za-z]$/.test(key)) {
        if (currentGuess.length < 5) {
          setCurrentGuess((prev) => prev + key.toLowerCase());
        }
      }
    },
    [currentGuess, turn, history]
  );

  const resetGame = () => {
    setTurn(0);
    setCurrentGuess("");
    setGuesses([...Array(6)]);
    setHistory([]);
    setIsCorrect(false);
    setUsedKeys({});
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyUp,
    resetGame,
  };
};

export default useWordle;
