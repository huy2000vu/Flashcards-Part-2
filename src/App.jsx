import { useState } from "react";
import "./App.css";
import Flipcard from "./assets/components/Flipcard";
import "./index.css";
import dinosaurTrivia from "./assets/components/Questions";
import UserInputBox from "./assets/components/UserInputBox";

function App() {
  const [question, setQuestion] = useState(
    "Click to flip the card to see the answer "
  );
  const [answer, setAnswer] = useState("Good Luck!");
  const [isFlipped, setIsFlipped] = useState(false); // State to track the flip

  const questions = Object.keys(dinosaurTrivia);
  const numberofquestions = questions.length;

  const [currStreak, setCurrStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Function to handle streak update when the user submits their answer
  const handleAnswerSubmission = (isCorrect) => {
    if (isCorrect) {
      // If the answer is correct, increase the current streak
      setCurrStreak((prevStreak) => prevStreak + 1);
      // Update the longest streak if the current streak is longer
      setLongestStreak((prevLongestStreak) =>
        currStreak + 1 > prevLongestStreak ? currStreak + 1 : prevLongestStreak
      );
    } else {
      // Reset the current streak if the answer is wrong
      setCurrStreak(0);
    }
  };

  function nextQuestion() {
    // Generate a random question index
    let randomQuestionIndex = Math.floor(Math.random() * numberofquestions);

    const newQuestion = questions[randomQuestionIndex];
    const newAnswer = dinosaurTrivia[newQuestion];

    // Update question and answer in state
    setQuestion(newQuestion);
    setAnswer(newAnswer);

    // Ensure the card flips back to the front
    setIsFlipped(false);
  }

  return (
    <div className="App">
      <h1 className="title">🦕DinoQuiz🦕</h1>
      <h3 className="description">
        One-of-a-kind quiz game that challenges your dinosaur knowledge with
        thrilling questions
      </h3>
      <br />
      <h4 className="questionslen">Number of Cards: {numberofquestions}</h4>
      <br />
      <h5 className="streak_tracker">
        Current Streak: {currStreak}, Longest Streak: {longestStreak}
      </h5>
      {/* Pass the flip state and question/answer props to Flipcard */}
      <Flipcard
        question={question}
        answer={answer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      {/* Pass the handleAnswerSubmission to UserInputBox */}
      <UserInputBox
        question={question}
        answer={answer}
        onAnswerSubmission={handleAnswerSubmission}
      />
      <button className="nextBtn" onClick={nextQuestion}>
        ➡️
      </button>
    </div>
  );
}

export default App;
