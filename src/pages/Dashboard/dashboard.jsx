import React from 'react';
import './dashboard.scss'
import Sidebar from '../../component/sidebar/sidebar'
import FormInput from '../../component/formInput/formInput'
import { FaSlidersH,FaSortDownFaTrashAlt,FaListUl} from 'react-icons/fa';

const Dashboard =()=>(
  <div className="Dashboard">
    <div className="sidebar">
    <Sidebar/>
    </div>
    <div className="dashboard-body" >
      <FormInput  placeholder='Search' searchInput/>
      <h2>Make Post</h2>
      <FormInput  placeholder="What's up, Bami?" postInput/>
      <div className="feed">
        <p className='secondary option-feed'>FEED</p>
        <p className='filters'><FaSlidersH/>Filters</p>
      </div>
 <h2><FaSortDownFaTrashAlt/>Recent</h2>
    

    </div>
  </div>
)
export default Dashboard;
