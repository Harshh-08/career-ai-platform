import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewSession.css";

function InterviewSession() {

  const navigate = useNavigate();

  const questions = [
    "Tell me about yourself.",
    "Why do you want to join our company?",
    "What are your strengths?",
    "Describe a challenging project.",
    "Where do you see yourself in 5 years?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [time, setTime] = useState(60);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
      setTime(60);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer("");
      setTime(60);
    }
  };

  const finishInterview = () => {
    navigate("/interview-report");
  };

  return (
    <div className="session-page">

      <div className="session-card">

        <div className="session-header">
          <h2>AI Mock Interview</h2>
          <span>⏱ {time}s</span>
        </div>

        <div className="progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="question-box">
          <h3>{questions[currentQuestion]}</h3>
        </div>

        <textarea
          rows="8"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="button-group">

          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button onClick={finishInterview}>
              Finish Interview
            </button>
          ) : (
            <button onClick={nextQuestion}>
              Next
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default InterviewSession;