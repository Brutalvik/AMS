import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerActions } from "../../store/registerReducer";
import { logicActions } from "../../store/logicReducer";
import Button from "react-bootstrap/Button";

const Status = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.logic.message);
  const state = useSelector((state) => state);
  console.log(state);

  const handleClick = () => {
    dispatch(registerActions.registerUser([]));
    dispatch(logicActions.setMessage([]));
    navigate("/login");
  };

  return (
    <div>
      <h1>{status.message}</h1>
      <p>Login to access account</p>
      <Button variant="primary" size="lg" onClick={handleClick}>
        Login
      </Button>
    </div>
  );
};

export default Status;
