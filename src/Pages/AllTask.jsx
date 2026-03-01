import React from "react";
import AllTasks from "../Components/Task";

const AllTask = () => {
  return (
    <div className="text-white h-screen w-full overflow-y-auto flex items-center justify-center">
      <AllTasks showTaskList={true} simpleMode={true} Heading={"Tasks"} />
    </div>
  );
};

export default AllTask;
