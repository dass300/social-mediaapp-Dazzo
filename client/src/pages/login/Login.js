import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLlogo">Dazzo</h3>
          <span className="loginDesc">Connect with your friends....</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="text" className="loginInput" />
            <input
              placeholder="password"
              type="text"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForget">Forget Password</span>
            <button className="loginRegisterButton">
              Create A new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
