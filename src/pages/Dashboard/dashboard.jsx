import React, { useState } from "react";
import "./dashboard.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Articles from "../Articles/Articles";
import Feed from "../Feed/feed";
import Sidebar from "../../component/sidebar/sidebar";
import Gifs from "../Gifs/Gifs";
import New from '../New/new.jsx'
const Dashboard = () => {
  const match = useRouteMatch();
  const [isSideBarOpenOnMobile, setisSideBarOpenOnMobile] = useState(false);

  
  return (
    <div className="Dashboard">
      <div>
        <Sidebar isSideBarOpenOnMobile = {isSideBarOpenOnMobile} closeSideBar = {() => {setisSideBarOpenOnMobile(false)}}/>
      </div>
      

      <div className="dashboard-body ">
        <div class = "hamburger-icon" onClick = {
          () =>{ 
            setisSideBarOpenOnMobile(!isSideBarOpenOnMobile);
          }
        }>
          <div id = "first"></div>
          <div id = "second"></div>
          <div id = "third"></div>
        </div>
        <Switch >
          
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
