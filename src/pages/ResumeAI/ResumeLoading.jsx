import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeLoading.css";

function ResumeLoading() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/resume-report");
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="loading-card">

        <div className="loading-icon">📄</div>

        <h1>Analyzing Your Resume</h1>

        <p>
          Please wait while our AI analyzes your resume,
          checks ATS compatibility, compares it with the
          job description, and prepares your report.
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2>{progress}%</h2>

        <div className="loading-steps">

          <div className={progress >= 20 ? "active" : ""}>
            ✓ Reading Resume
          </div>

          <div className={progress >= 45 ? "active" : ""}>
            ✓ Checking ATS Score
          </div>

          <div className={progress >= 70 ? "active" : ""}>
            ✓ Matching Job Description
          </div>

          <div className={progress >= 100 ? "active" : ""}>
            ✓ Generating AI Report
          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeLoading;