import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [formTitle, setFormTitle] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{formTitle}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {formTitle === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {formTitle === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={formTitle === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setFormTitle("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={formTitle === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setFormTitle("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
