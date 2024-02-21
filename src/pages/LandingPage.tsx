import React from "react";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const LandingPage = () => {
  return (
    <>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Button variant='primary'
        onClick={() => {
          console.log("hello world");
        }
      } >Create User</Button>
    </>
  );
};

export default LandingPage;
