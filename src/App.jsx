import { useState, useEffect } from "react";
import Wordle from "./components/Wordle.jsx";

const App = () => {
  const [solution, setSolution] = useState(null);
  const getRandomSolution = () => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution);
      });
  };
  useEffect(() => {
    getRandomSolution();
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo) </h1>
      {solution && <Wordle solution={solution} onRetry ={getRandomSolution}/>}
    </div>
  );
};

export default App;
