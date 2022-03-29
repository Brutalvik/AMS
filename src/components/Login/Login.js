import React from "react";
import classes from "./Login.module.css";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.logic);
  const [userData, setUserData] = React.useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          name="email"
          type="email"
          placeholder="Email"
          className={classes.input_container}
          value={userData.email || ""}
          onChange={handleChange}
        />
        <Form.Text className={classes.error}>
          {!userData.email && status.message.error}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          className={classes.input_container}
          value={userData.password || ""}
          onChange={handleChange}
        />
        <Form.Text className={classes.error}>
          {!userData.password && status.message.error}
        </Form.Text>
      </Form.Group>
      <button
        className={`btn btn-primary ${classes.button}`}
        onClick={handleClick}
      >
        Login
      </button>
    </Form>
  );
};

export default Login;
