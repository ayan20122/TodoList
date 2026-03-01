import React from "react";

const AboutThisApp = () => {
  return (
    <div className="w-full  h-screen mx-auto bg-[#121212] border border-[#2a2a2a] rounded-2xl p-2 shadow-2xl font-sans text-gray-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-5 tracking-tight mt-10">
          Modern Task Management
        </h1>
        <p className="text-lg text-gray-400">
          A sleek, high-performance To-Do application built with React and
          Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <section className="bg-[#181818] p-6 rounded-xl border border-[#2a2a2a]">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">
              <span className="text-white mr-2">•</span>
            </span>{" "}
            Key Features
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Smart Persistence:</strong> Integrated with{" "}
                <code>localStorage</code> to ensure your data stays safe even
                after a page refresh.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Dynamic Filtering:</strong> Separate views for all tasks
                and completed tasks using conditional rendering.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Inline Editing:</strong> Update your task descriptions
                on the fly without navigating away.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Responsive UI:</strong> Optimized for both desktop and
                mobile users with Tailwind's utility-first grid system.
              </span>
            </li>
          </ul>
        </section>


        <section className="bg-[#181818] p-6 rounded-xl border border-[#2a2a2a]">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">
              <span className="text-white mr-2">•</span>
            </span>
            Technical Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React 18",
              "Tailwind CSS",
              "HeroIcons",
              "JavaScript ES6+",
              "Local Storage API",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#2a2a2a] text-blue-400 text-sm rounded-full border border-blue-900/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            The app utilizes <strong>Functional Components</strong> and{" "}
            <strong>React Hooks</strong> (<code>useState</code>,{" "}
            <code>useEffect</code>) for a clean, maintainable codebase.
          </p>
        </section>
      </div>

    
      <section className="mt-8 bg-[#181818] p-6 rounded-xl border border-[#2a2a2a]">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Architecture & Data
        </h2>
        <p className="mb-4">
          This application follows a reusable component pattern. The{" "}
          <code>Task</code> component acts as a multi-purpose engine, adjusting
          its UI based on props like <code>showInput</code>,{" "}
          <code>showTaskList</code>, and <code>showCompletedOnly</code>.
        </p>
        <div className="bg-black/40 p-4 rounded-lg border border-[#333]">
          <code className="text-sm text-indigo-400">
            // Task Object Schema <br />
            {"{"} text: string, completed: boolean {"}"}
          </code>
        </div>
      </section>


      <footer className="mt-10 text-center border-t border-[#2a2a2a] pt-6">
        <p className="text-gray-500 italic">
          Designed for speed, built for productivity.
        </p>
      </footer>
    </div>
  );
};

export default AboutThisApp;
