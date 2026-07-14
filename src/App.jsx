import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Tracker from "./pages/Tracker/Tracker";
import ResumeAI from "./pages/ResumeAI/ResumeAI";
import ResumeLoading from "./pages/ResumeAI/ResumeLoading";
import ResumeReport from "./pages/ResumeAI/ResumeReport";
import InterviewAI from "./pages/InterviewAI/InterviewAI";
import InterviewSetup from "./pages/InterviewAI/InterviewSetup";
import InterviewSession from "./pages/InterviewAI/InterviewSession";
import InterviewReport from "./pages/InterviewAI/InterviewReport";
import CareerRoadmap from "./pages/CareerRoadmap/CareerRoadmap";
import RoadmapResult from "./pages/CareerRoadmap/RoadmapResult";
import CompanyPrep from "./pages/CompanyPrep/CompanyPrep";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/resume-ai" element={<ResumeAI />} />
        <Route path="/resume-loading" element={<ResumeLoading />} />
        <Route path="/resume-report" element={<ResumeReport />} />
        <Route path="/interview-ai" element={<InterviewAI />} />
        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/interview-session" element={<InterviewSession />} />
        <Route path="/interview-report" element={<InterviewReport />} />
        <Route path="/career-roadmap" element={<CareerRoadmap />} />
        <Route path="/roadmap-result" element={<RoadmapResult />} />
        <Route path="/company-prep" element={<CompanyPrep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;