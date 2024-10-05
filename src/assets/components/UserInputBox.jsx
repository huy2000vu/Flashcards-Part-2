import React, { useEffect, useState } from "react";

function useCheckUserGuess(userGuess, answer) {
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (userGuess && answer) {
      if (userGuess.toLowerCase() === answer.toLowerCase()) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  }, [userGuess, answer]);

  return isCorrect;
}

export default function UserInputBox({ question, answer }) {
  const [userGuess, setUserGuess] = useState("");
  const isCorrect = useCheckUserGuess(userGuess, answer);

  // Update the state as the user types
  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  // Handle the submit action when the button is clicked
  const handleSubmit = () => {
    if (isCorrect !== null) {
      console.log(isCorrect ? "correct" : `wrong, you're dumb`);
    }
  };

  return (
    <div className="userInputDiv">
      <h1>Guess your answer here: </h1>
      <input
        className="userInputBox"
        type="text"
        value={userGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess..."
      />
      <button onClick={handleSubmit}>Submit guess</button>
    </div>
  );
}
