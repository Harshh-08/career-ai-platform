import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatCard from "../../components/StatCard";
import ActivityList from "../../components/ActivityList";
import dashboardData from "../../data/dashboardData";
import ProgressChart from "../../components/charts/ProgressChart";
import "./Dashboard.css";


function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>Welcome, Harsh 👋</h1>
          <p>Your placement dashboard at a glance.</p>
        </div>

        <div className="cards">

          {dashboardData.stats.map((item,index)=>(

            <StatCard
              key={index}
              title={item.title}
              value={item.value}
            />

          ))}

        </div>

   <div className="progress-card">
    <h2>Placement Progress</h2>
    <ProgressChart />
</div>
        <ActivityList activities={dashboardData.activities}/>

        <div className="quick-actions">

    <div className="action-card">
        <h3>Resume AI</h3>
        <p>Upload your resume and get ATS analysis with AI suggestions.</p>
        <button onClick={() => navigate("/resume-ai")}>
            Open Resume AI
        </button>
    </div>

    <div className="action-card">
        <h3>Interview AI</h3>
        <p>Practice mock interviews and receive instant AI feedback.</p>
        <button onClick={() => navigate("/interview-ai")}>
            Start Interview
        </button>
    </div>

    <div className="action-card">
        <h3>Placement Tracker</h3>
        <p>Track applications, interviews and placement progress.</p>
        <button onClick={() => navigate("/tracker")}>
            View Tracker
        </button>
    </div>

</div>
      </div>

      <Footer />

    </>
  );
}

export default Dashboard;