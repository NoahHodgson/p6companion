import React, { useState } from "react";
import "../static/login.css"
import { Form, Row, Col, Modal, Button } from "react-bootstrap";

interface LoginModalProps {
    show: boolean
    showCallback: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = () => {
    return (
      <>
        <Form className="login-form">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
            <Col >
                <Form.Control type="username" placeholder="Username" />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col >
                <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </>
    );
}

const LoginModal = (props: LoginModalProps) => {
    return (
        <>
          <Modal show={props.show} onHide={() => {props.showCallback(false)}}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <LoginForm />
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {props.showCallback(false)}}>Close</Button>
              <Button variant="success">Login</Button>
            </Modal.Footer>
        </Modal>
        </>
      );
};

export default LoginModal;
