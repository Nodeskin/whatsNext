import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const style = {
    backgroundColor: "blue",
    color: "white",
    padding: "7px 12px",
    marginTop: "70px",
    border: "none",
  };

  return (
    <>
      <div className="landing">
        <div className="background"></div>

        <div className="heading">
          <h2>Welcome to Task Node</h2>
          <p>
            A newly profound way to keep up with your daily schedules and manage
            your ongoing activiies
          </p>
        </div>
      </div>

      <Link to="signUp">
        {" "}
        <button style={style} >Let's Get Started</button>{" "}
      </Link>

      <p>
        Already have an account <Link to="signIn">SignIn</Link>
      </p>
    </>
  );
};

export default LandingPage;
