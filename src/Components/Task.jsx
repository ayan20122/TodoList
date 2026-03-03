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
      return savedTasks !== null ? JSON.parse(savedTasks) : [];
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
    // Added: h-full or min-h-screen to ensure background covers everything
    <div className="w-full max-w-2xl mx-auto bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 md:p-10 shadow-2xl">
      {/* Heading: Now always visible at the top */}
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 tracking-wide">
        {Heading}
      </h1>

      {showInput && (
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

          {showButton && (
            <button
              type="button"
              className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold tracking-wide"
              onClick={() => {
                if (task.trim() !== "") {
                  const newTasks = [...CopyTask, { text: task, completed: false }];
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

      {showRecent && (
        <div className="md:hidden mb-8 px-2">
          <h2 className="text-white/70 font-semibold text-sm uppercase tracking-wider mb-3">
            Recent Activity
          </h2>
          <div className="flex flex-col gap-2">
            {CopyTask.slice(-2).reverse().map((item, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] p-3 rounded-xl opacity-80">
                <p className={`truncate text-sm ${item.completed ? "line-through text-gray-500" : "text-gray-300"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showTaskList && (
        // Changed: Removed fixed height on mobile so it scrolls with the main page
        <div className="space-y-4 md:max-h-[60vh] md:overflow-y-auto pr-2">
          {CopyTask.length === 0 && (
            <p className="text-gray-400 text-center">No tasks added yet</p>
          )}

          {CopyTask.map((item, index) => {
            if (showCompletedOnly && !item.completed) return null;

            return (
              <div
                key={index}
                className="bg-[#181818] border border-[#2a2a2a] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && editingValue.trim() !== "") {
                          const newTasks = [...CopyTask];
                          newTasks[index].text = editingValue;
                          updateTasks(newTasks);
                          setEditingIndex(null);
                        } else if (e.key === "Escape") {
                          setEditingIndex(null);
                        }
                      }}
                      className="w-full p-2 bg-[#121212] border border-[#2a2a2a] text-white rounded-lg min-w-0"
                      autoFocus
                    />
                  ) : (
                    <p className={`truncate text-lg ${item.completed ? "line-through text-gray-400" : "text-white"}`}>
                      {item.text}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:ml-auto shrink-0 border-t border-[#2a2a2a] pt-3 sm:border-t-0 sm:pt-0">
                  <button
                    className="flex-1 sm:flex-none border border-blue-500 text-blue-500 p-2 rounded-md hover:bg-blue-500 transition flex justify-center"
                    onClick={() => {
                      const newTasks = [...CopyTask];
                      newTasks[index].completed = !newTasks[index].completed;
                      updateTasks(newTasks);
                    }}
                  >
                    <CheckIcon className="w-5 h-5" />
                  </button>

                  <button
                    className="flex-1 sm:flex-none border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 transition flex justify-center"
                    onClick={() => {
                      setEditingIndex(index);
                      setEditingValue(item.text);
                    }}
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>

                  <button
                    className="flex-1 sm:flex-none border border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 transition flex justify-center"
                    onClick={() => {
                      const newTasks = CopyTask.filter((_, i) => i !== index);
                      updateTasks(newTasks);
                    }}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Task;
