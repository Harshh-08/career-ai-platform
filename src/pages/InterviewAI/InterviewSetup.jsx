import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewSetup.css";

function InterviewSetup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        type: "HR Interview",
        company: "Google",
        role: "",
        level: "Fresher",
        questions: 10
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const startInterview = () => {
        navigate("/interview-session");
    };

    return (
        <div className="setup-page">

            <div className="setup-card">

                <h1>Interview Setup</h1>
                <p>Customize your interview before you begin.</p>

                <label>Interview Type</label>
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option>HR Interview</option>
                    <option>Technical Interview</option>
                    <option>Behavioral Interview</option>
                    <option>Resume Based</option>
                </select>

                <label>Company</label>
                <select
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                >
                    <option>Google</option>
                    <option>Microsoft</option>
                    <option>Amazon</option>
                    <option>TCS</option>
                    <option>Infosys</option>
                    <option>Zoho</option>
                </select>

                <label>Job Role</label>
                <input
                    type="text"
                    name="role"
                    placeholder="Frontend Developer"
                    value={formData.role}
                    onChange={handleChange}
                />

                <label>Experience Level</label>
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                >
                    <option>Fresher</option>
                    <option>0 - 2 Years</option>
                    <option>2 - 5 Years</option>
                </select>

                <label>Number of Questions</label>
                <select
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>

                <button onClick={startInterview}>
                    Start Interview
                </button>

            </div>

        </div>
    );
}

export default InterviewSetup;