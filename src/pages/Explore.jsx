import React from "react";
import Toast from "react-bootstrap/Toast";

const Explore = () => {
  return (
    <div className="d-flex justify-content-center">
      <br />
      <Toast>
        <Toast.Header>
          <strong className="me-auto">FROM Noah</strong>
          <small>DEC 24</small>
        </Toast.Header>
        <Toast.Body>Hi Gavin!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Explore;
