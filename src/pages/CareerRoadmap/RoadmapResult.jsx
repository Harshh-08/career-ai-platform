import { useNavigate } from "react-router-dom";
import "./RoadmapResult.css";

function RoadmapResult() {

  const navigate = useNavigate();

  const roadmap = [
    "Learn HTML, CSS & JavaScript",
    "Master React.js",
    "Understand Git & GitHub",
    "Learn REST APIs",
    "Build Real-World Projects",
    "Practice DSA & Problem Solving",
    "Prepare for Interviews"
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "REST API"
  ];

  const certifications = [
    "Frontend Development",
    "JavaScript Essentials",
    "React Developer"
  ];

  const projects = [
    "Portfolio Website",
    "E-Commerce Website",
    "Career AI Platform"
  ];

  return (
    <div className="result-page">

      <h1>Your Career Roadmap</h1>

      <div className="result-card">

        <h2>🎯 Career Goal</h2>
        <p>Frontend Developer</p>

      </div>

      <div className="result-card">

        <h2>📍 Learning Roadmap</h2>

        <ol>
          {roadmap.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

      </div>

      <div className="result-card">

        <h2>💻 Skills to Learn</h2>

        <div className="tag-list">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

      </div>

      <div className="result-card">

        <h2>📜 Recommended Certifications</h2>

        <ul>
          {certifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="result-card">

        <h2>🚀 Suggested Projects</h2>

        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>

      </div>

      <div className="result-card">

        <h2>⏳ Estimated Timeline</h2>
        <p>4–6 Months of consistent learning and practice.</p>

      </div>

      <div className="button-group">

        <button>Download Roadmap</button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/career-roadmap")}
        >
          Generate Again
        </button>

      </div>

    </div>
  );
}

export default RoadmapResult;