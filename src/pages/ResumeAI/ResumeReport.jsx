import { useNavigate } from "react-router-dom";
import "./ResumeReport.css";

function ResumeReport() {

  const navigate = useNavigate();

  const scores = [
    { title: "Overall Score", value: "92%" },
    { title: "ATS Score", value: "88%" },
    { title: "Grammar", value: "95%" },
    { title: "JD Match", value: "85%" }
  ];

  const skills = ["React", "JavaScript", "HTML", "CSS", "Git"];
  const missing = ["Node.js", "MongoDB", "REST API"];

  const suggestions = [
    "Add measurable achievements.",
    "Include more project details.",
    "Improve ATS keywords.",
    "Add certifications."
  ];

  return (
    <div className="report-page">

      <h1>Resume Analysis Report</h1>

      <div className="score-grid">
        {scores.map((score, index) => (
          <div className="score-card" key={index}>
            <h2>{score.value}</h2>
            <p>{score.title}</p>
          </div>
        ))}
      </div>

      <div className="report-section">
        <h2>Skills Found</h2>
        <div className="tag-list">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="report-section">
        <h2>Missing Skills</h2>
        <div className="tag-list missing">
          {missing.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="report-section">
        <h2>AI Suggestions</h2>

        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="button-group">

        <button>Download Report</button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/resume-ai")}
        >
          Analyze Again
        </button>

      </div>

    </div>
  );
}

export default ResumeReport;