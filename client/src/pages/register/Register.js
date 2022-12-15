import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLlogo">Dazzo</h3>
          <span className="loginDesc">Connect with your friends....</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="signupInput" />
            <input placeholder="Email" type="text" className="signupInput" />
            <input
              placeholder="password"
              type="text"
              className="signupInput"
            />
            <input
              placeholder="confirm password"
              type="text"
              className="signupInput"
            />
            <button className="loginButton">SignUp</button>
            <span className="loginForget">Forget Password</span>
            <button className="loginRegisterButton">
              Log Into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
