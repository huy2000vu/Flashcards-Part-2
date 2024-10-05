import React, { useState, useEffect } from "react";

function UserInputBox({ question, answer, onAnswerSubmission }) {
  const [userGuess, setUserGuess] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  // Check if the guess is correct
  const isCorrect = userGuess.toLowerCase() === answer.toLowerCase();

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    setHasSubmit(true);
    // Call the onAnswerSubmission function with the result
    onAnswerSubmission(isCorrect);
  };

  return (
    <div className="userInputDiv">
      <h1>Guess your answer here: </h1>
      <input
        className={`userInputBox ${
          hasSubmit ? (isCorrect ? "correct" : "wrong") : ""
        }`}
        type="text"
        value={userGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess..."
      />
      <button onClick={handleSubmit}>Submit guess</button>
    </div>
  );
}

export default UserInputBox;
