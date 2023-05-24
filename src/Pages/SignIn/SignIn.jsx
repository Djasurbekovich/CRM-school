import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to CRM!");
  };

  return (
    <section className="sign__body">
      <div className="sign">
        <div className="sign__triangle"></div>
        <h2 className="sign__header">Sign In</h2>
        <form className="sign__container" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <Link to="/dashboard">
            <button className="sign__btn" type="submit">
              <span>Login</span>
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
