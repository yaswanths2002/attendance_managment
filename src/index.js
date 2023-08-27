import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubjectListPage from "./pages/SubjectListPage";
// import BlogPage from './pages/BlogPage';
import Aform from "./pages/Aform";
import AttStatus from "./pages/AttStatus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SubjectListPage />,
  },
  {
    path: "/form",
    element: <Aform />,
  },
  {
    path: "/status",
    element: <AttStatus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
