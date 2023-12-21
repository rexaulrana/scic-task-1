import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Task from "../pages/task/Task";

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
    ],
  },
  {
    path: "task",
    element: <Task></Task>,
  },
]);

export default router;
