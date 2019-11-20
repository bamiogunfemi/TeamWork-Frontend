import React, { Component } from "react";
import "./signup.scss";
import FormInput from "../../component/formInput/formInput";
import CustomButton from '../../component/custombutton/custombutton';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName:'',
      email: "",
      password: "",
      confirmPassword: "",
      jobRole:'',
      dept:'',
      gender:'',
      address:''

      


    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { firstName,lastName, password, email, confirmPassword,jobRole,gender, address } = this.state;
    // if (password !== confirmPassword) {
    //   alert("passwords do not match");
    //   return;
    // }
    // try {
    // //   const { user } = await auth.createUserWithEmailAndPassword(
    // //     email,
    // //     password
    // //   );
    // //   await createUserProfileDocument(user, { displayName });
    // //   this.setState({
    // //     displayName: "",
    // //     email: "",
    // //     password: "",
    // //     confirmPassword: ""
    // //   });
    // // } catch (error) {
    // //   console.log(error);
    // }
  }
  handleChange= e =>{

    const {name, value} = e.target;
    this.setState({[name]: value})
  }
  render() {
   
    const { firstName,lastName, password, email, confirmPassword,jobRole,gender, address } = this.state;
    return (
      <div className="container sign-up">
        <span>Sign up </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="First Name"
            required
          />
            <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
            <FormInput
            type="text"
            name="jobRole"
            value={jobRole}
            onChange={this.handleChange}
            label="Job Role"
            required
          />
            <FormInput
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            label="Address"
            required
          />
            <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
            <FormInput
            type="text"
            name="gender"
            value={gender}
            onChange={this.handleChange}
            label="Gender"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="Confirmpassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
        
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
