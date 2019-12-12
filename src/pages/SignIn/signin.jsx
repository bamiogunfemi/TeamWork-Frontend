import React, { Component, Fragment } from "react";
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
const { password, email } = this.state;
if(password && email){
  console.log("yep")
}
  }
  handleChange = e => {

    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  render() {

    const { password, email } = this.state;
    return (

      <article className='br3 ba dark-grey b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center'>
        <main className='pa4 black-80'>
          <form className='measure '>
            <fieldset id='signin' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
              <div className="mt3">
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                <input type="email"
                  className="pa2 input-reset ba bg-transparent  w-100"
                  value={email}
                  onChange={this.handleChange}
                  required
                  id="email-address"
                  name='email-address' />
              </div>
              <div className="mv3">
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required 
                  className="pa2 input-reset ba bg-transparent  w-100" id="" />
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
