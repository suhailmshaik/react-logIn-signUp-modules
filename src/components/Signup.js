import React from "react";
import { useState } from "react";

let Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signUp-div">
      <h1 className="SignUp-h1">Sign Up</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" id="name" placeholder="John Doe" />
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        {email.length >= 1 && !(email.includes("@") && email.includes(".")) && (
          <p className="error-text">please enter a valid email</p>
        )}
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
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
      <button className="signUp-btn" type="submit">
        Sign Up
      </button>
      <p>Already have an account?</p>
      <button className="login-click">Log In</button>

      {/* <link className="login-click" to="/SignUp">
        Log In
      </link> */}
    </div>
  );
};

export default Signup;
