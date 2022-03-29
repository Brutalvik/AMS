import React from "react";
import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../store/registerUser";

const Register = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => console.log(state.logic.message));
  const [userData, setUserData] = React.useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await dispatch(postUser(userData));
  };

  return (
    <div className={classes.form_container}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            className={classes.input_container}
            value={userData.name || ""}
            onChange={handleChange}
          />
          <Form.Text className={classes.error}>error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            className={classes.input_container}
            value={userData.email || ""}
            onChange={handleChange}
          />
          <Form.Text className={classes.error}>error</Form.Text>
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
          <Form.Text className={classes.error}>error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className={classes.labeltext}>Date of Birth</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            className={classes.input_container}
            value={userData.dob || ""}
            onChange={handleChange}
          />
          <Form.Text className={classes.error}>error</Form.Text>
        </Form.Group>
        <button
          className={`btn btn-primary ${classes.button}`}
          onClick={handleClick}
        >
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
