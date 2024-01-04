import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterPage from "./pages/CharacterPage";
import logo from "./assets/logo.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/character",
    element: <CharacterPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar data-bs-theme="dark" style={ { backgroundColor: "#cf1322"}}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="120"
            height="84"
            className="d-inline-block align-top"
            alt="p6 logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/character">Character-Creation</Nav.Link>
          <Nav.Link href="https://noahhodgson.github.io/power6system/">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
