import React from "react";
import classes from "./Register.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../store/registerUser";
import Spinner from "../../UI/Spinner/Spinner";
import Registrationform from "./Registrationform";
import { logicActions } from "../../store/logicReducer";

const Register = () => {
  const dispatch = useDispatch();
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

  const handleNavigate = (event) => {
    event.preventDefault();
    dispatch(logicActions.setActive("login"));
  };

  const props = {
    handleChange: handleChange,
    handleClick: handleClick,
    handleNavigate: handleNavigate,
    userData: userData,
    status: status,
  };

  return status.loading ? (
    <div className={classes.spinner}>
      <Spinner />
    </div>
  ) : (
    <Registrationform {...props} />
  );
};

export default Register;
