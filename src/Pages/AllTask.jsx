import React from "react";
import AllTasks from "../Components/Task";

const AllTask = () => {
  return (
    <div className="text-white h-screen w-full overflow-y-auto bg-[#0a0a0a] pt-10 pb-20">
      <AllTasks showTaskList={true} simpleMode={true} Heading={"Tasks"} />
    </div>
  );
};

export default AllTask;
