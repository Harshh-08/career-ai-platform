import "./ResumeAI.css";

function ResumeAI() {
  return (
    <div className="resume-page">

      <h1>Resume AI</h1>
      <p className="subtitle">
        Build, upload and improve your resume with AI.
      </p>

      <div className="resume-container">

        <div className="resume-card">
          <h2>Upload Resume</h2>

          <input type="file" />

          <button>Upload</button>
        </div>

        <div className="resume-card">
          <h2>Resume Score</h2>

          <div className="score">
            82%
          </div>

          <p>Your resume is ATS friendly.</p>
        </div>

      </div>

      <div className="resume-card">
        <h2>AI Suggestions</h2>

        <ul>
          <li>Add more technical skills.</li>
          <li>Improve project descriptions.</li>
          <li>Include measurable achievements.</li>
          <li>Optimize keywords for ATS.</li>
        </ul>
      </div>

    </div>
  );
}

export default ResumeAI;