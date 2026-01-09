import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution"> The word was {solution}</p>
          <p>
            You found the solution in {turn} guesses! {":)"}{" "}
          </p>
        </div>
      )}

      {!isCorrect && (
        <div>
          <h1>You lost!, But that's okay</h1>
          <p className="solution"> {solution} was the word</p>
          <p>
            Better luck next time {":)"}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
