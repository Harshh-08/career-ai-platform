import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CareerRoadmap.css";

function CareerRoadmap() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    education: "B.E / B.Tech",
    career: "Frontend Developer",
    level: "Beginner"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateRoadmap = () => {
    navigate("/roadmap-result");
  };

  return (
    <div className="roadmap-page">

      <div className="roadmap-card">

        <h1>Career Roadmap AI</h1>

        <p>
          Select your current profile and let AI generate a
          personalized learning roadmap.
        </p>

        <label>Education</label>
        <select
          name="education"
          value={formData.education}
          onChange={handleChange}
        >
          <option>B.E / B.Tech</option>
          <option>B.Sc</option>
          <option>BCA</option>
          <option>MCA</option>
          <option>Other</option>
        </select>

        <label>Target Career</label>
        <select
          name="career"
          value={formData.career}
          onChange={handleChange}
        >
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Analyst</option>
          <option>UI/UX Designer</option>
          <option>AI Engineer</option>
        </select>

        <label>Current Skill Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button onClick={generateRoadmap}>
          Generate Roadmap
        </button>

      </div>

    </div>
  );
}

export default CareerRoadmap;