import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

const Status = () => {
  const status = useSelector((state) => state.logic.message);
  console.log(status);
  return (
    <div>
      <h1>{status.message}</h1>
      <p>Login to access account</p>
      <Button variant="primary" size="lg">
        Login
      </Button>
    </div>
  );
};

export default Status;
