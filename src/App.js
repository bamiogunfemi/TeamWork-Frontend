import React from "react";
import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import Dashboard from "./pages/Dashboard/dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Switch>
        
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route  path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
