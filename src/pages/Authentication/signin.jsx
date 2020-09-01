import React, { useState } from "react";
import "./authentication.scss";
import { Link } from 'react-router-dom';
import { useFirebase } from "react-redux-firebase";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Loader from "react-loader-spinner";

const SignIn = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const location = useLocation();
  const error = useSelector(state => state.firebase.authError)
  
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

  const signInWithEmailAndPassword = (email, password) => {
    if (email === '' || password === '') {
      alert(
        'Kindly fill All fields'
      )
    } else {
      firebase
        .login({
          email: email,
          password: password,
        })
        .then(() => {
          history.push("/dashboard");
        })
        // .catch((e) => {
        //   console.log(e, e.message, 'error')
        // })
    }
  }
  if (!isLoaded(auth) && isEmpty(auth)) {
    return (
      <Loader
        type="Puff"
        color="#1b1a72"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

  if (isLoaded(auth) && !isEmpty(auth)) {
    return (
      <Redirect
        to={{
          pathname: "/dashboard",
          state: { from: location }
        }}
      />
    );
  }

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form className="form">
        <p>{error && error.message}</p>
        <div className="label-input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="email-button"
          onClick={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(email, password);
          }}
        >
          {(!isLoaded(auth)) ? (<Loader
            type="Puff"
            color="#1b1a72"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />) : 'Sign in'}
        </button>
        <p>Don't have an account? <span><Link to='/signup'> Sign Up</Link></span></p>

      </form>
    </div>
  );
};

export default SignIn;
