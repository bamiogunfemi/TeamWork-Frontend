import React, { useState } from "react";
import "./authentication.scss";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [signUpCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    jobRole: "",
    dept: "",
    gender: "male",
    address: "",
  });
  const {
    firstName,
    lastName,
    password,
    email,
    confirmPassword,
    jobRole,
    gender,
    address,
  } = signUpCredentials;

  const history = useHistory();
  const firebase = useFirebase();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
    } else {
      firebase
        .createUser(
          { email, password },
          {
            firstName,
            lastName,
            jobRole,
            gender,
            address,
          }
        )
        .then(() => {
          history.push("/dashboard");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...signUpCredentials, [name]: value });
    
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>

      <form className="form">
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
          <label htmlFor="jobRole">Job Role</label>
          <input
            type="text"
            name="jobRole"
            required
            id="jobRole"
            value={jobRole}
            onChange={handleChange}
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            required
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="label-input-container w-100">
          <label onChange={handleChange} value={gender} htmlFor="gender">
            Gender
          </label>
          <div className="gender-container">
            <div>
              <input
                type="radio"
                id="male"
                value="male"
                defaultChecked
                name="gender"
              />
              <label htmlFor="male">Male</label>
            </div>

            <div>
              <input type="radio" value="female" id="female" name="gender" />
              <label htmlFor="female">Female</label>
            </div>

            <div>
              <input type="radio" value="others" id="others" name="gender" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
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
          Sign up with email
        </button>
      </form>
    </div>
  );
};

export default SignUp;
