import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const navLinks = (
    <>
      <div className=" md:flex justify-center items-center gap-4 ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#65B741] text-xl font-sans font-medium hover:underline"
                : " text-xl"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#65B741] text-xl  font-sans font-medium hover:underline"
                : "text-xl"
            }
            to={"/task"}
          >
            Task
          </NavLink>
        </div>

        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#65B741] font-sans font-medium text-xl hover:underline"
                : "text-xl"
            }
            to={"/registration"}
          >
            Registration
          </NavLink>
        </div>
      </div>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-xl font-medium text-[#65B741]">
            Work Flow
          </div>
          <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks}
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}{" "}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-fdivl bg-base-200">
          {/* Sidebar content here */}
          {navLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
