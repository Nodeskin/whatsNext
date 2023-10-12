import React from "react";

const SignUpPage = () => {
  return (
    <div class="sign-up-head">
      <section className="sign-up">
        <div>
          <h1>TASK NODE</h1>
          <p>Please fill the flelds</p>
        </div>

        <div className="input-fields">

          <div className="input">
            <label>First name: </label>
            <input placeholder="First name" />
          </div>

          <div className="input">
            <label>Last name: </label>
            <input placeholder="Last name" />
          </div>

          <div className="input">
            <label>email: </label>
            <input placeholder="email" />
          </div>

          <div className="input">
            <label>Username: </label>
            <input placeholder="User name" />
          </div>

          <div className="input">
            <label>Gender: </label>
              <select className="select">
                {" "}
                Gender
                <option> -Select- </option>
                <option> Male </option>
                <option> Female </option>
                <option> Others </option>
              </select>
          </div>

          <p>RE-EDIT THIS</p>

          <button> SIGN UP</button>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
