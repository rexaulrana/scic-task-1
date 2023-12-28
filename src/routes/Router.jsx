import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../pages/dashboard/AddTask";
import About from "../pages/About";
import Tasks from "../pages/dashboard/tasks/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    // errorElement:
    children: [
      {
        path: "all-tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "add-task",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);

export default router;
