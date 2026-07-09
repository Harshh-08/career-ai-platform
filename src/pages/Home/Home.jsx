import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Career AI</h1>

        <p>
          Build ATS-friendly resumes, practice AI-powered interviews,
          prepare for companies, and track your placement journey —
          all in one platform.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>
      <section className="features">
  <h2>Our Features</h2>

  <div className="feature-container">
    <div className="card">
      <h3> Resume AI</h3>
      <p>Create ATS-friendly resumes with AI suggestions.</p>
    </div>

    <div className="card">
      <h3> Interview AI</h3>
      <p>Practice technical and HR interviews with AI.</p>
    </div>

    <div className="card">
      <h3> Career AI</h3>
      <p>Get career guidance and skill recommendations.</p>
    </div>

    <div className="card">
      <h3> Company Prep</h3>
      <p>Prepare for top companies with coding and HR questions.</p>
    </div>

    <div className="card">
      <h3> Tracker</h3>
      <p>Track all your job applications in one place.</p>
    </div>

  </div>
</section>
<section className="why-us">
  <h2>Why Choose Career AI?</h2>

  <div className="why-container">
    <div className="why-card">
      <h3> AI Powered</h3>
      <p>Use AI to improve your resume and interview skills.</p>
    </div>

    <div className="why-card">
      <h3>Track Progress</h3>
      <p>Monitor your placement journey and application status.</p>
    </div>

    <div className="why-card">
      <h3>Career Guidance</h3>
      <p>Get personalized career recommendations based on your skills.</p>
    </div>
  </div>
</section>
<Footer />
    </>
  );
}

export default Home;