import React, {useEffect, lazy, Suspense} from "react";
import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import Dashboard from "./pages/Dashboard/dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'


const App=({currentUser})=> {
  return (
    <div className="App">
      <Switch>
        <Route 
        exact
         path="/signin"
        render={()=> currentUser ? 
        <Redirect to ='/'/>: <SignIn/>} />
        <Route exact path="/signup" component={SignUp} />
        <Route  path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
