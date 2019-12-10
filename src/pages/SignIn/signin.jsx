import React, { Component, Fragment } from "react";
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
      // <div className="container sign-up">
      //   <span>Sign In</span>
      //   <form className="sign-in-form" onSubmit={this.handleSubmit}>

           
      //     <FormInput
      //       type="email"
      //       name="email"
      //       value={email}
      //       onChange={this.handleChange}
      //       label="Email"
      //       required
      //     />
      //     <FormInput
      //       type="password"
      //       name="password"
      //       value={password}
      //       onChange={this.handleChange}
      //       label="Password"
      //       required
      //     />
          
      //  

     <article className='br3 ba dark-grey b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center'>
       <main className='pa4 black-80'>
         <form className='measure '>
           <fieldset id='signin' className='ba b--transparent ph0 mh0'>
             <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
             <div className="mt3">
               <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
               <input type="email"
                className="pa2 input-reset ba bg-transparent  w-100"
                 id="email-address" 
                 name='email-address'/>
             </div>
             <div className="mv3">
               <label className='db fw6 lh-copy f6' htmlFor='email-address'>Password</label>
               <input type="password" className="pa2 input-reset ba bg-transparent  w-100" id=""/>
             </div>
           </fieldset>
           <Fragment>
           <CustomButton type="submit">Sign In</CustomButton>
           </Fragment>

         </form>
       </main>
     </article>
     
    );
  }
}

export default SignIn;
