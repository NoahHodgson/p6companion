import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "./static/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Nav, Form, Button, Modal, Row, Col } from "react-bootstrap";
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
]);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currUser, setCurrUser] = useState();

  async function login(ev: React.ChangeEvent<any>) {
    ev.preventDefault();
    await axios.post('http://localhost:8080/login', {
      username
    });
  }
  async function register(ev: React.ChangeEvent<any>) {
    ev.preventDefault();
    await axios.post('http://localhost:8080/register', {
      username
    });
  }

  return (
    <div className="App">
      <Modal show={showLogin} onHide={() => {setShowLogin(false)}}>
        <Modal.Header className="login-modal-header" closeButton>
          <Modal.Title className="login-modal-title"> Login / Register </Modal.Title>
        </Modal.Header>
  
        <Modal.Body className="login-modal-body">
          <Form className="login-form">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
              <Col >
                  <Form.Control onChange={ev => {setUsername(ev.target.value)}} type="username" placeholder="Username" />
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Col >
                  <Form.Control  onChange={ev => {setPassword(ev.target.value)}} type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
  
        <Modal.Footer className="login-modal-footer">
          <Button variant="secondary" onClick={() => {setShowLogin(false)}}>Close</Button>
          <Button className="login-button" variant="outline-success" onClick={ev => {
            login(ev);
            setShowLogin(false);
            setLoggedIn(true);
            }}>Login</Button>
          <Button className="register-button" variant="outline-danger" onClick={ev => {
            register(ev);
            setShowLogin(false);
            setLoggedIn(true);
            }}>Register</Button>
        </Modal.Footer>
      </Modal>
      
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
          { !loggedIn ? <Nav.Link onClick={() => setShowLogin(true)}> Login</Nav.Link> : null }
        </Nav>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
