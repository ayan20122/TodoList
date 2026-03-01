import React from "react";
import AllTasks from "../Components/Task";

const CompletedTask = () => {
  return (
    <div className="text-white h-screen w-full overflow-y-auto flex items-center justify-center">
      <AllTasks showTaskList={true} showCompletedOnly={true} Heading={"Completed"}  />
    </div>
  );
};

export default CompletedTask;
