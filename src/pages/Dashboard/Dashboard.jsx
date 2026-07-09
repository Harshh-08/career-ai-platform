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

        <div className="action-buttons">

    <button onClick={() => navigate("/resume-ai")}>
        Resume AI
    </button>

    <button onClick={() => navigate("/interview-ai")}>
        Interview AI
    </button>

    <button onClick={() => navigate("/tracker")}>
        Application Tracker
    </button>

</div>

      </div>

      <Footer />

    </>
  );
}

export default Dashboard;