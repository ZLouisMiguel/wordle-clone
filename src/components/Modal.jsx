const Modal = ({ isCorrect, turn, solution, onRetryClick }) => {
  return (
    <div className="modal">
      <div>
        {isCorrect ? (
          <>
            <h1>You Win 🎉</h1>
            <p className="solution">{solution}</p>
            <p>You found the word in {turn} guesses</p>
          </>
        ) : (
          <>
            <h1>Nice try 💪</h1>
            <p className="solution">{solution}</p>
            <p>Better luck next time</p>
          </>
        )}

        <button onClick={onRetryClick}>Play Again</button>
      </div>
    </div>
  );
};

export default Modal;
