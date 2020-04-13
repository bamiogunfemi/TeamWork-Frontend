import React, { useState, Fragment } from "react";
import "./authentication.scss";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { password, email } = userCredentials;
  const history = useHistory();
  const firebase = useFirebase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/dashboard");
      });
  }

  const signInWithEmailAndPassword = () =>{
    firebase
      .login({
        email: email,
        password: password,
      })
      .then(() => {
        history.push("/dashboard");
      });
  }
  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form className="form">
        <div className="label-input-container">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="" value = {email} onChange={handleChange} />
        </div>
        <div className="label-input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            value = {password}
            onChange={handleChange}
          />
        </div>
        <button
          className="email-button"
          onClick={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(email, password);
          }}
        >
          Sign in with email
        </button>
        <button
          className="google-button"
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
