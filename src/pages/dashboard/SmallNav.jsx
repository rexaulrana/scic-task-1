import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaHome, FaTasks, FaThinkPeaks } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SmallNav = () => {
  const { user } = useContext(AuthContext);
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
    <div className="navbar fixed z-10  ">
      <div className="drawer drawer-start">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn bg-[#65B741] drawer-button">
            <span className="text-2xl text-white">
              <TiThMenu></TiThMenu>
            </span>
          </label>
        </div>
        <div className="drawer-side overflow-auto  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className=" mt-5   flex flex-col justify-center items-center">
              <img className="w-10  " src={user?.photoURL} alt="" />
              <h1 className="text-xl mt-5">{user?.displayName}</h1>
            </div>
            <div className="mt-8">{navLinks}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
