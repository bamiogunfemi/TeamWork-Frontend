import React, { Component, Fragment } from "react";
import "./signup.scss";
import CustomButton from '../../component/custombutton/custombutton';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: '',
      email: "",
      password: "",
      confirmPassword: "",
      jobRole: '',
      dept: '',
      gender: '',
      address: ''




    };
  }
  handleSubmit = async event => {

    const {  password,  confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      confirmPassword: '',
      jobRole: '',
      gender: '',
      address: ''
    });
  }

  handleChange = e => {

    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  render() {

    const { firstName, lastName, password, email, confirmPassword, jobRole, gender, address } = this.state;
    return (
      <article className='br3 ba dark-grey b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center'>
        <main className='pa4 black-80'>
          <form className='measure '>
            <fieldset id='signin' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign Up</legend>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='name'>First Name</label>
                <input type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  label="First Name"
                  required className="pa2 input-reset ba bg-transparent  w-100" />
              </div>

              <div className="mt3">
                <label className='db fw6 lh-copy f6' htmlFor='name'>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  required
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='address'>Address</label>
                <input type="text"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                  label="Address"
                  required className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                <input value={email}
                  onChange={this.handleChange}
                  label="Email"
                  required className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3 gender">
                <label className='db fw6 lh-copy f6' onChange={this.handleChange} value={gender} htmlFor='gender'>Gender</label>
                <input type="radio" value='male' checked name='gender' /> Male  <br />
                <input type="radio" value='female' name='gender' /> Female < br />
                <input type="radio" value='others' name='gender' /> Others <br />

              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  label="Password"
                  required
                  className="pa2 input-reset ba bg-transparent  w-100" />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='password'> Confirm Password</label>
                <input type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}

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
}


export default SignUp;
