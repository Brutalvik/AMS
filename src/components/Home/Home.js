import React from "react";
import classes from "./Home.module.css";
import { useSelector } from "react-redux";
//Components
import Register from "../Register/Register";
import Status from "../Status/Status";

const Home = () => {
  const status = useSelector((state) => state.logic.message);
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1 className={classes.logo}>AMS</h1>
        <br />
        <h1 className={classes.sublogo}>
          Appointment <br /> Management <br />
          System
        </h1>
      </div>
      <div className={classes.center_bar}></div>
      <div className={classes.box}>
        {status.status === 200 ? <Status /> : <Register />}
      </div>
    </div>
  );
};

export default Home;
