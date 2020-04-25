import React from "react";
import "./dashboard.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Articles from "../Articles/Articles";
import Feed from "../Feed/feed";
import Sidebar from "../../component/sidebar/sidebar";
import Gifs from "../Gifs/Gifs";
import New from '../New/new.jsx'
const Dashboard = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div className="Dashboard">
      <Sidebar />

      <div className="dashboard-body ">
        <Switch>

          <Route path={`${match.path}/articles`} component={Articles} />
          <Route path={`${match.path}/gifs`} component={Gifs} />
          <Route path={`${match.path}/new`} component={New} />
          <Route path={`${match.path}/`} component={Feed} />

        </Switch>
      </div>
    </div>
  );
};
export default Dashboard;
