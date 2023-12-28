import { NavLink } from "react-router-dom";
import { FaThinkPeaks } from "react-icons/fa6";

import {} from "react-icons/md";
import { FaHome, FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const navLinks = (
    <>
      <div className="flex flex-col items-start  justify-center gap-2 ml-8 md:ml-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#65B741] text-xl  font-sans font-medium hover:underline"
              : "text-xl text-white"
          }
          to={"all-tasks"}
        >
          <span className="flex justify-center items-center gap-3">
            {" "}
            <FaTasks></FaTasks>
            All Tasks
          </span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#65B741] text-xl  font-sans font-medium hover:underline"
              : "text-xl text-white"
          }
          to={"add-task"}
        >
          <span className="flex justify-center items-center gap-3">
            {" "}
            <FaThinkPeaks></FaThinkPeaks>
            Add Task
          </span>
        </NavLink>
        <div className="divider"></div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#65B741] text-xl  font-sans font-medium hover:underline"
              : "text-xl text-white"
          }
          to={"/"}
        >
          <span className="flex justify-center items-center gap-3">
            {" "}
            <FaHome></FaHome>
            Home
          </span>
        </NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="mt-8">{navLinks}</div>
    </div>
  );
};

export default Sidebar;
