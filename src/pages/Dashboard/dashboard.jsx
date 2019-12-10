import React from 'react';
import './dashboard.scss'
import { Switch, Route } from 'react-router-dom'
import Articles from '../Articles/Articles'
import Feed from '../Feed/feed'
import Sidebar from '../../component/sidebar/sidebar'
import Gifs from '../Gifs/Gifs'
const Dashboard = () => (
  <div className="Dashboard">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="dashboard-body" >
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/articles" component={Articles} />
        <Route path="/gifs" component={Gifs} />
      </Switch>
    </div>
  </div>
)
export default Dashboard;
