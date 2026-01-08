const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
          return (
            <div key={index} className={letter.color}>
              {" "}
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, index) => {
          return <div key={index} className="filled">
            {letter}
          </div>;
        })}

        {Array(5 - letters.length).fill(null).map((_, index) => {
           return <div key={index}></div>;
        })}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
