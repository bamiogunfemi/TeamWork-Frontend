import React from 'react';
import './dashboard.scss'
import {Switch} from 'react-router-dom'
import Articles from '../pages/Articles/Articles'
import Sidebar from '../../component/sidebar/sidebar'
import FormInput from '../../component/formInput/formInput'
const Dashboard =()=>(
  <div className="Dashboard">
    <div className="sidebar">
    <Sidebar/>
    <Switch>

      </Switch>
    </div>
    <div className="dashboard-body" >
     
 
    </div>
  </div>
)
export default Dashboard;
