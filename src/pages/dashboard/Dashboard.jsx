import { Outlet } from "react-router-dom";
import SmallNav from "./SmallNav";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // dnd for touch device or desktop
  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex h-screen ">
          {/* mobile device nav */}

          {/* tab device nav */}
          <div className="hidden   md:w-64 h-screen  md:block">
            <div className=" mt-5   flex flex-col justify-center items-center">
              <img className="w-10  " src={user?.photoURL} alt="" />
              <h1 className="text-xl mt-5">{user?.displayName}</h1>
            </div>
            <Sidebar></Sidebar>
          </div>
          <div className="w-full md:flex-1    ">
            {/* small nav */}
            <div className="block      z-10 md:hidden lg:hidden text-right  text-2xl  bg-opacity-90 ">
              <SmallNav></SmallNav>
              {/* <button className="px-5 pb-4 " onClick={() => handleToggle()}>
              <CiMenuFries></CiMenuFries>
            </button> */}
            </div>
            <div className="p-10">
              <h1 className="text-3xl font-medium">
                Be strong --- <br />
                {user.displayName}
              </h1>
            </div>
            <div>
              <div className="px-10">
                <DndProvider backend={backend}>
                  <Outlet></Outlet>
                </DndProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
