import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [heading, setHeading] = useState("");
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function SubHandler(e) {
    e.preventDefault();

    if (!heading.trim() || !task.trim()) return;

    setTodo([...todo, { heading, task }]);
    setHeading("");
    setTask("");
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4 gap-10">
      <h1 className="text-2xl font-bold text-white">Project2</h1>

      <div className="w-full max-w-xl bg-neutral-900 text-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center tracking-wide">
          Todo List
        </h1>

        <form onSubmit={SubHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Heading..."
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
          />

          <textarea
            placeholder="Write your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition resize-none"
            rows="3"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Add Task
          </button>
        </form>

        <div className="space-y-4">
          {todo.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg">{item.heading}</h3>
              <p className="text-gray-300 mt-2 wrap-break-words">
                {" "}
                {item.task}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
