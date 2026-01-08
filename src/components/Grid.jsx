import Row from "./Row";

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <>
      <div className="grid">
        {guesses.map((guess, index) => {
          return <Row key={index} guess={guess} />;
        })}
      </div>
    </>
  );
};

export default Grid;
