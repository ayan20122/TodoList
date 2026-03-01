import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import AboutThisApp from "./Pages/AboutThisApp";
import CompletedTask from "./Pages/CompletedTask";
import AllTask from "./Pages/AllTask";

const App = () => {
  return (
    // md:flex-row for side-by-side desktop, flex-col for stacked mobile
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#171717] overflow-hidden">
      {/* Sidebar - hidden/toggle handled inside Sidebar.js via md:translate-x-0 */}
      <div className="w-0 md:w-24 shrink-0">
        <Sidebar />
      </div>

      {/* Main content - perfectly centered on all screens */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-10 overflow-y-auto">
        <div className="w-full h-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/completed" element={<CompletedTask />} />
            <Route path="/AboutApp" element={<AboutThisApp />} />
            <Route path="/alltask" element={<AllTask />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
