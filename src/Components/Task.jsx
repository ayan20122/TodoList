import React, { useState } from "react";
import { TrashIcon, PencilIcon, CheckIcon } from "@heroicons/react/24/solid";

const Task = ({
  showInput,
  showButton,
  showTaskList,
  showRecent,
  showCompletedOnly,
  Heading,
}) => {
  const [task, setTask] = useState("");

  const [CopyTask, setCopyTask] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks !== null) {
        return JSON.parse(savedTasks);
      } else {
        return [];
      }
    } catch {
      return [];
    }
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const updateTasks = (newTasks) => {
    setCopyTask(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    // Responsive padding p-6 on mobile, p-10 on desktop
    <div className="w-full max-w-2xl mx-auto bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 md:p-10 shadow-2xl">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 tracking-wide">
        {Heading}
      </h1>

      {showInput === true && (
        <form
          className="flex flex-col sm:flex-row gap-4 mb-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter your task..."
            className="flex-1 p-3 bg-[#181818] border border-[#2a2a2a] text-white rounded-xl outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          {showButton === true && (
            <button
              type="button"
              className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold tracking-wide hover:from-indigo-600 hover:to-blue-600 transition duration-300 shadow-lg"
              onClick={() => {
                if (task !== "") {
                  const newTasks = [
                    ...CopyTask,
                    { text: task, completed: false },
                  ];
                  updateTasks(newTasks);
                  setTask("");
                }
              }}
            >
              Add Task
            </button>
          )}
        </form>
      )}

      {showTaskList === true && (
        <div className="space-y-4 max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-2">
          {CopyTask.length === 0 && (
            <p className="text-gray-400 text-center">No tasks added yet</p>
          )}

          {CopyTask.map((item, index) => {
            if (showCompletedOnly === true && item.completed !== true)
              return null;

            return (
              <div
                key={index}
                className="bg-[#181818] border border-[#2a2a2a] p-4 rounded-xl flex items-center gap-4"
              >
                <button
                  className="border border-blue-500 text-blue-500 p-1.5 rounded-md hover:bg-blue-500 hover:text-white transition duration-200 shrink-0"
                  onClick={() => {
                    const newTasks = [...CopyTask];
                    newTasks[index].completed = !newTasks[index].completed;
                    updateTasks(newTasks);
                  }}
                >
                  <CheckIcon className="w-4 h-4" />
                </button>

                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && editingValue !== "") {
                        const newTasks = [...CopyTask];
                        newTasks[index].text = editingValue;
                        updateTasks(newTasks);
                        setEditingIndex(null);
                      } else if (e.key === "Escape") {
                        setEditingIndex(null);
                      }
                    }}
                    className="flex-1 p-2 bg-[#121212] border border-[#2a2a2a] text-white rounded-lg min-w-0"
                    autoFocus
                  />
                ) : (
                  <p
                    className={`flex-1 break-words min-w-0 ${item.completed === true ? "line-through text-gray-400" : "text-white"}`}
                  >
                    {item.text}
                  </p>
                )}

                <div className="flex items-center gap-2 ml-auto shrink-0">
                  <button
                    className="border border-green-500 text-green-500 p-1.5 rounded-md hover:bg-green-500 hover:text-white transition duration-200"
                    onClick={() => {
                      setEditingIndex(index);
                      setEditingValue(item.text);
                    }}
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>

                  <button
                    className="border border-red-500 text-red-500 p-1.5 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                    onClick={() => {
                      const newTasks = CopyTask.filter((_, i) => i !== index);
                      updateTasks(newTasks);
                    }}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showRecent === true && (
        <div className="mt-10 space-y-3">
          <h2 className="text-white font-semibold text-lg">Recent Tasks</h2>
          <div className="max-h-[20vh] overflow-y-auto space-y-2">
            {CopyTask.slice(-3).map((item, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-[#2a2a2a] p-3 rounded-xl"
              >
                <p
                  className={
                    item.completed === true
                      ? "line-through text-gray-400"
                      : "text-white"
                  }
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
