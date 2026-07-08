import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResumeAI from "./pages/ResumeAI/ResumeAI";
import InterviewAI from "./pages/InterviewAI/InterviewAI";
import CareerAI from "./pages/CareerAI/CareerAI";
import CompanyPrep from "./pages/CompanyPrep/CompanyPrep";
import Tracker from "./pages/Tracker/Tracker";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-ai" element={<ResumeAI />} />
        <Route path="/interview-ai" element={<InterviewAI />} />
        <Route path="/career-ai" element={<CareerAI />} />
        <Route path="/company-prep" element={<CompanyPrep />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
