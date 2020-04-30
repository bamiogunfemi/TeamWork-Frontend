import React from "react";
import SignUp from "./pages/Authentication/signup";
import SignIn from "./pages/Authentication/signin";
import Dashboard from "./pages/Dashboard/dashboard";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
