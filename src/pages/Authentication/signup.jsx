import React, { useState, useSelector, Suspense } from "react";
import "./authentication.scss";
import { Link } from 'react-router-dom';
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Loader from '../../component/loader/loader'
import { isLoaded } from 'react-redux-firebase'

const SignUp = () => {
  const history = useHistory();
  const firebase = useFirebase();
  // const auth = useSelector((state) => state.firebase.auth);
  // const errors = useSelector(state => state.firebase.authError)
  const [error, setError] = useState('');
  const [signUpCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",


  });
  const {
    firstName,
    lastName,
    password,
    email,
    confirmPassword,


  } = signUpCredentials;


  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!isLoaded(auth)) return <Loader />;

    if (password !== confirmPassword) {
      setError("passwords do not match");
    }
    else if (firstName === '' ||
      lastName === '' ||
      password === '' ||
      email === '' ||
      confirmPassword === '') {
      setError('All fields are required')
    } else {
      firebase
        .createUser(
          { email, password },
          {
            firstName,
            lastName,


          }
        )
        .then(() => {
          history.push("/dashboard");
        });
    }
  };
  console.log(error)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('')
    setCredentials({ ...signUpCredentials, [name]: value });

  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>

      <form className="form">
        <p>{error}</p>
        <Suspense callback={<Loader />}>
          <div className="label-input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              required
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              id="lastName"
              onChange={handleChange}
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={handleChange}
            />
          </div>


          <div className="label-input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button className="email-button" onClick={handleSubmit}>
            Sign up
        </button>
          <p>Already have an account? <span><Link to='/'> Login</Link></span></p>
        </Suspense>
      </form>
    </div>
  );
};
export default SignUp;
