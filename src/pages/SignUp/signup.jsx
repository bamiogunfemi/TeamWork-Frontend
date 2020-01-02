import React, {  Fragment, useState } from "react";
import "./signup.scss";
import CustomButton from '../../component/custombutton/custombutton';
import { signUpStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'



const SignUp = ({ signUpStart }) => {

  const { signUpCredentials, setCredentials } = useState({
    firstName: "",
    lastName: '',
    email: "",
    password: "",
    confirmPassword: "",
    jobRole: '',
    dept: '',
    gender: '',
    address: ''
  })
  const { firstName, lastName, password, email, confirmPassword, jobRole, gender, address } = signUpCredentials


 const handleSubmit = async event => {

  event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    signUpStart({firstName, lastName,jobRole}) 

  

  }

const handleChange = e => {

    const { name, value } = e.target;
    setCredentials({ ...signUpCredentials ,[name]: value })
  }


    return (
      <article className='br3 ba dark-grey b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center'>
        <main className='pa4 black-80'>
          <form className='measure'onSubmit={handleSubmit} >
            <fieldset id='signin' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign Up</legend>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='name'>First Name</label>
                <input type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  label="First Name"
                  required 
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>

              <div className="mt3">
                <label className='db fw6 lh-copy f6' htmlFor='name'>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                  className="pa2 input-reset ba bg-transparent  w-100"
                  id="email-address"
                />
              </div>

              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='Job role'>Job Role</label>
                <input type="text"
                  name="jobRole"
                  value={jobRole}
                  onChange={handleChange}
                  required
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='address'>Address</label>
                <input type="text"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  label="Address"
                  required className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                <input value={email}
                  onChange={handleChange}
                  label="Email"
                  required className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3 gender">
                <label className='db fw6 lh-copy f6' onChange={handleChange} value={gender} htmlFor='gender'>Gender</label>
                <input type="radio" value='male' checked name='gender' /> Male  <br />
                <input type="radio" value='female' name='gender' /> Female < br />
                <input type="radio" value='others' name='gender' /> Others <br />

              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  required
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='password'> Confirm Password</label>
                <input type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}

                  required
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
            </fieldset>
            <Fragment>
              <CustomButton type="submit">Create User</CustomButton>
            </Fragment>

          </form>
        </main>
      </article>
    );
  
}
const mapDispatchToProps = dispatch =>({
  signUpStart: userCredentials => dispatch(signUpStart())
})

export default connect(mapDispatchToProps) (SignUp);
