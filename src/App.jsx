import { useState, useEffect } from "react";
import Wordle from "./components/Wordle.jsx";

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo) </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
