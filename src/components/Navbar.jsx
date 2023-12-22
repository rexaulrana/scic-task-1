import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = ({ children }) => {
  const { user, loggedOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <div className=" md:flex justify-center items-center gap-4 ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#65B741] text-xl font-sans font-medium hover:underline"
                : " text-xl text-white"
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
                : "text-xl text-white"
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </div>

        {!user && (
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#65B741] font-sans font-medium text-xl hover:underline"
                  : "text-xl text-white"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </>
  );

  const handleLogOut = () => {
    loggedOut()
      .then(() => {
        // console.log(result);
        toast.success("User logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="drawer fixed ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-opacity-30 bg-black">
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
          <div className="flex-none px-2 mx-2 text-xl font-medium text-[#65B741]">
            Work Flow
          </div>
          <div className="flex-1  hidden mx-72 lg:block">
            <div className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks}
            </div>
          </div>
          {/* big device user info */}
          <div className="hidden lg:block">
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>{user?.displayName}</li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
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
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navLinks}
          {/* small device user info */}
          <div className="block  lg:hidden">
            <div className="dropdown  dropdown-right">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>{user?.displayName}</li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
