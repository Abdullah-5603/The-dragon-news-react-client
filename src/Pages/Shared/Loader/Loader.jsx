import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-2">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loader;
