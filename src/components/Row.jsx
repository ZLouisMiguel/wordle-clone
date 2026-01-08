const Row = ({ guess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
          return <div key={index} className={letter.color}>
            {" "}
            {letter.key}
          </div>;
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
