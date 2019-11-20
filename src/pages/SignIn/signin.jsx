import React, { Component } from "react";
import "./signin.scss";
import FormInput from "../../component/formInput/formInput";
import CustomButton from '../../component/custombutton/custombutton';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    
    

      


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
   
    const { password, email} = this.state;
    return (
      <div className="container sign-up">
        <span>Sign In</span>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>

           
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
          
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
