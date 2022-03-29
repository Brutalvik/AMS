import React from "react";
import classes from "./Register.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../store/registerUser";
import Spinner from "../../UI/Spinner/Spinner";
import Registration from "./Registration";

const Register = () => {
  const dispatch = useDispatch();
  // const test = useSelector((state) => console.log(state.logic));
  const status = useSelector((state) => state.logic);
  const [userData, setUserData] = React.useState({});
  console.log(status);

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(postUser(userData));
  };

  const props = {
    handleChange: handleChange,
    handleClick: handleClick,
    userData: userData,
    status: status,
  };

  return status.loading ? (
    <div className={classes.spinner}>
      <Spinner />
    </div>
  ) : (
    <Registration {...props} />
  );
};

export default Register;
