import React from "react";
import "./dashboard.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Articles from "../Articles/Articles";
import Feed from "../Feed/feed";
import Sidebar from "../../component/sidebar/sidebar";
import Gifs from "../Gifs/Gifs";
const Dashboard = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div className="Dashboard">
      <Sidebar />

      <div className="dashboard-body ">
        <Switch>
          <Route exact path={`${match.path}/`} component={Feed} />
          <Route exact path={`${match.path}/articles`} component={Articles} />
          <Route exact path={`${match.path}/gifs`} component={Gifs} />
        </Switch>
      </div>
    </div>
  );
};
export default Dashboard;
