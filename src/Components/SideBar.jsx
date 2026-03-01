import React, { useState } from "react";
import TrashIcon from "../assets/trash-2.svg";
import CompleteIcon from "../assets/check.svg";
import AllTaskIcon from "../assets/clipboard.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] md:hidden p-2 bg-[#1f1f1f] rounded-md border border-[#2a2a2a]"
      >
        <svg
          xmlns="http://www.w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          />
        </svg>
      </button>

      {/* SIDEBAR CONTAINER */}
      <div
        className={`fixed top-0 left-0 h-screen w-24 bg-[#0d0d0d] border-r border-[#1f1f1f] flex flex-col items-center py-8 gap-12 z-50 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* LOGO: mt-16 on mobile prevents overlap with the button */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex flex-col items-center cursor-pointer mt-16 md:mt-0"
        >
          <div className="text-white text-2xl font-semibold tracking-wider rotate-50">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVR4nO2ZOw7CQAxE9yR87pGScCXalJyAz+0InCDUKw2ylMIlGUfBEfOkLTPet3IauxQhhEgNgB2AO4AXgIrv6VxGN+G7Ota6We3o5Y8A3hOKzyHgsdote/l94PJzCRgDgC0jYG2DBALGlRGwPswi0DMCNZFAZQSQSAASIJCARwIEEvBIgEACUYFz8Bxc1iGaV8TaAHAKnsZlNdG8Qgis/ieOIgGPBAgk4JEAgQTw7wJ17YOtZyKBByNwSyRwYRcbWcbrm8kCY+F2DPiVwEAvOFzxrc3nbcS94Iqpt7ahX14IIcpSfACivX32anCaqQAAAABJRU5ErkJggg=="
              alt="Logo"
            />
          </div>
        </Link>

        <Link
          to="/alltask"
          onClick={() => setIsOpen(false)}
          className="group flex flex-col items-center cursor-pointer"
        >
          <img
            src={AllTaskIcon}
            alt="All Tasks"
            className="w-7 h-7 opacity-70 group-hover:opacity-100 transition duration-300"
          />
          <span className="text-xs text-gray-500 mt-2 group-hover:text-white transition duration-300">
            All
          </span>
        </Link>

        <Link
          to="/completed"
          onClick={() => setIsOpen(false)}
          className="group flex flex-col items-center cursor-pointer"
        >
          <img
            src={CompleteIcon}
            alt="Completed Tasks"
            className="w-7 h-7 opacity-70 group-hover:opacity-100 transition duration-300"
          />
          <span className="text-xs text-gray-500 mt-2 group-hover:text-white transition duration-300">
            Done
          </span>
        </Link>

        <Link
          to="/AboutApp"
          onClick={() => setIsOpen(false)}
          className="group flex flex-col items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 opacity-70 group-hover:opacity-100 transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <span className="text-xs text-gray-500 mt-2 group-hover:text-white transition duration-300">
            AboutApp
          </span>
        </Link>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
