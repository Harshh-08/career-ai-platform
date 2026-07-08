import Navbar from "../../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Career AI Platform</h1>

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
    </>
  );
}

export default Home;