import React from "react";
import { AiOutlineProject } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
          <button
            type="button"
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
          >
            <AiOutlineProject/>
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">2</span>
          </p>
          <p className="text-sm text-gray-400  mt-1">Project</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
