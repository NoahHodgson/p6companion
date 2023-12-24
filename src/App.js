import React from "react";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Explore from "./pages/Explore";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/character",
    element: <Character />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
