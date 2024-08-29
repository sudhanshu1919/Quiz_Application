import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS

// import components
import Main from "./Main";
import Quiz from "../components/Quiz";
import Result from "./Result";

// React Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
