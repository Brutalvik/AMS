import React from "react";
import classes from "./Home.module.css";
//Components
import Register from "../Register/Register";

const Home = () => {
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
        <Register />
      </div>
    </div>
  );
};

export default Home;
