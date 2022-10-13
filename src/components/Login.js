import React from "react";
import Signup from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";

let Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="logIn-div">
      <h1 className="login-h1">Login</h1>
      <form>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
        />
        {email.length >= 1 && !(email.includes("@") && email.includes(".")) && (
          <p className="error-text">please enter a valid email</p>
        )}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        {password.length >= 1 &&
          !(password.length > 6 && password.length < 12) && (
            <p className="error-text">
              password should be <br />
              between 6 to 12 characters
            </p>
          )}
      </form>
      <button className="logIn-btn" type="submit">
        Log in
      </button>
      <p>Don't have an account?</p>
      <Link className="signUp-click" to="/">
        Sign up
      </Link>
    </div>
  );
};

export default Login;
