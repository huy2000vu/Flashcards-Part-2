import React from "react";

function Flipcard({ question, answer, isFlipped, setIsFlipped }) {
  const flipTheCard = () => {
    setIsFlipped(!isFlipped); // Toggle flip state
  };
  return (
    <div
      className="flip-card"
      onClick={flipTheCard}
      style={{ cursor: "pointer" }}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          {/* Show the question when the card is not flipped */}
          <div className="question">{question}</div>
        </div>
        <div className="flip-card-back">
          {/* Show the answer when the card is flipped */}
          <div className="answers">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
