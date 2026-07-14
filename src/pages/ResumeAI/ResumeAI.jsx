import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeAI.css";

function ResumeAI() {

    const navigate = useNavigate();

    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    const handleFile = (e) => {
        setResume(e.target.files[0]);
    };

    const handleAnalyze = () => {
        if (!resume) {
            alert("Please upload your resume.");
            return;
        }

        navigate("/resume-loading");
    };

    return (

        <div className="resume-page">

            <section className="hero">

                <div className="hero-content">

                    <h1>Resume AI</h1>

                    <p>
                        Upload your resume, compare it with a job description,
                        and receive an AI-style analysis with ATS score,
                        grammar check, missing skills and improvement tips.
                    </p>

                </div>

            </section>

            <section className="upload-section">

                <div className="upload-card">

                    <h2>Upload Resume</h2>

                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFile}
                    />

                    {resume && (
                        <p className="file-name">
                            {resume.name}
                        </p>
                    )}

                    <textarea
                        rows="6"
                        placeholder="Paste Job Description (Optional)"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />

                    <button onClick={handleAnalyze}>
                        Analyze Resume
                    </button>

                </div>

            </section>
                        <section className="features-section">

                <h2>What Resume AI Checks</h2>

                <div className="features-grid">

                    <div className="feature-card">
                        <h3>ATS Score</h3>
                        <p>Check if your resume passes ATS screening.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Grammar Check</h3>
                        <p>Find grammar and spelling mistakes.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Resume Ranking</h3>
                        <p>Get an overall resume quality score.</p>
                    </div>

                    <div className="feature-card">
                        <h3>Missing Skills</h3>
                        <p>Identify important skills missing from your resume.</p>
                    </div>

                    <div className="feature-card">
                        <h3>JD Match</h3>
                        <p>Compare your resume with the job description.</p>
                    </div>

                    <div className="feature-card">
                        <h3>AI Suggestions</h3>
                        <p>Receive smart recommendations to improve your resume.</p>
                    </div>

                </div>

            </section>

        </div>

    );
}

export default ResumeAI;