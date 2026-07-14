import { useNavigate } from "react-router-dom";
import "./InterviewReport.css";

function InterviewReport() {

  const navigate = useNavigate();

  const scores = [
    { title: "Overall Score", value: "89%" },
    { title: "Communication", value: "91%" },
    { title: "Technical", value: "85%" },
    { title: "Confidence", value: "88%" }
  ];

  const strengths = [
    "Good communication",
    "Confident introduction",
    "Relevant technical knowledge",
    "Clear explanations"
  ];

  const improvements = [
    "Improve eye contact",
    "Give shorter answers",
    "Use more real-world examples",
    "Practice technical concepts"
  ];

  return (
    <div className="report-page">

      <h1>Interview Report</h1>

      <div className="score-grid">
        {scores.map((score, index) => (
          <div className="score-card" key={index}>
            <h2>{score.value}</h2>
            <p>{score.title}</p>
          </div>
        ))}
      </div>

      <div className="report-section">

        <h2>Strengths</h2>

        <ul>
          {strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="report-section">

        <h2>Areas to Improve</h2>

        <ul>
          {improvements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="report-section">

        <h2>AI Feedback</h2>

        <p>
          You performed well in communication and answered most
          questions confidently. Focus on giving concise answers
          with more practical examples to improve your overall
          interview performance.
        </p>

      </div>

      <div className="button-group">

        <button onClick={() => navigate("/interview-setup")}>
          Retry Interview
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default InterviewReport;