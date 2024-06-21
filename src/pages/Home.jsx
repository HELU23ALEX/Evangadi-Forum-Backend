import React from "react";
import Login from "./Login";
// import Register from "./Register";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.bg}>
      <Login />
      {/* <Register /> */}
    </div>
  );
};
export default Home;
