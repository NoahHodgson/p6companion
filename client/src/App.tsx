import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./static/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterPage from "./pages/CharacterPage";
import logo from "./assets/logo.png";
import LoginModal from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <LoginModal show={showLogin} showCallback={setShowLogin}/>
      
      <Navbar data-bs-theme="dark" style={ { backgroundColor: "#A90000"}}>
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
          <Nav.Link href="https://noahhodgson.github.io/power6system/">
            About
          </Nav.Link>
          <Nav.Link onClick={() => setShowLogin(true)}> Login </Nav.Link>
        </Nav>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
