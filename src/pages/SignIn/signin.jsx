import React, { useState, Fragment } from "react";
import CustomButton from '../../component/custombutton/custombutton';
import { connect } from 'react-redux'
import { signInStart } from '../../redux/user/user.action'



const SignIn = ({ signInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const { password, email } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault();
    if (password && email) {
      signInStart(email, password)
    }
  }
  const handleChange = e => {

    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value })
  }
  return (

    <article className='br3 ba dark-grey b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center'>
      <main className='pa4 black-80'>
        <form className='measure' onSubmit={handleSubmit}>
          <fieldset id='signin' className='ba b--transparent ph0 mh0'>
            <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
            <div className="mt3">
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
              <input type="email"
                className="pa2 input-reset ba bg-transparent  w-100"
                value={email}
                onChange={handleChange}
                required
                id="email-address"
                name='email' />
            </div>
            <div className="mv3">
              <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
              <input type="password"
                name="password"
                value={password}
                onChange={handleChange}
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
const mapDispatchToProps = dispatch => ({
  signInStart: () => dispatch(signInStart())
})

export default connect(mapDispatchToProps)(SignIn);
