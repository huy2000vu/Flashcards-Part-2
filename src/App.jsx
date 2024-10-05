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
      <h4 className="questionslen">Number of Cards: {numberofquestions}</h4>

      {/* Pass the flip state and question/answer props to Flipcard */}
      <Flipcard
        question={question}
        answer={answer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <UserInputBox />
      <button className="nextBtn" onClick={nextQuestion}>
        ➡️
      </button>
    </div>
  );
}

export default App;
