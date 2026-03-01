import React from "react";
import Sidebar from "../Components/SideBar";
import Task from "../Components/Task";

const Dashboard = () => {
  return (
    <div className="h-screen w-full  flex items-center justify-center">
      <Task
        showInput={true}
        showButton={true}
        Heading={"Task Manager"}
         showRecent={true}
      />
    </div>
  );
};

export default Dashboard;
