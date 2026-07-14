import { useNavigate } from "react-router-dom";
import "./InterviewAI.css";

function InterviewAI() {

  const navigate = useNavigate();

  const features = [
    "HR Interview",
    "Technical Interview",
    "Company Specific",
    "Resume Based",
    "Behavioral Round",
    "Mock Assessment"
  ];

  return (
    <div className="interview-page">

      <section className="hero">

        <h1>Interview AI</h1>

        <p>
          Practice real interview questions with AI and receive
          instant feedback to improve your confidence and
          communication skills.
        </p>

        <button onClick={() => navigate("/interview-setup")}>
          Start Interview
        </button>

      </section>

      <section className="features">

        <h2>Interview Types</h2>

        <div className="feature-grid">

          {features.map((item, index) => (

            <div className="feature-card" key={index}>
              <h3>{item}</h3>
              <p>
                Practice AI-generated questions and improve your
                interview performance.
              </p>
            </div>

          ))}

        </div>

      </section>

      <section className="companies">

        <h2>Top Companies</h2>

        <div className="company-grid">

          <div className="company-card">Google</div>
          <div className="company-card">Microsoft</div>
          <div className="company-card">Amazon</div>
          <div className="company-card">TCS</div>
          <div className="company-card">Infosys</div>
          <div className="company-card">Zoho</div>

        </div>

      </section>

    </div>
  );
}

export default InterviewAI;