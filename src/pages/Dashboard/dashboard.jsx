import React from 'react';
import './dashboard.scss'
import Sidebar from '../../component/sidebar/sidebar'
import FormInput from '../../component/formInput/formInput'
import { FaSlidersH,FaSortDownFaTrashAlt,FaListUl,FaChevronDown} from 'react-icons/fa';

const Dashboard =()=>(
  <div className="Dashboard">
    <div className="sidebar">
    <Sidebar/>
    </div>
    <div className="dashboard-body" >
      <FormInput  placeholder='Search' searchInput/>
      <p className='big'>Make Post</p>
      <FormInput  placeholder="What's up, Bami?" postInput/>
      <div className="feed">
        <p className='secondary option-feed'>FEED</p>
        <p className='filters'><FaSlidersH className='icon-small icon-down'/>Filters</p>
      </div>
 <p className='big'>Recent <FaChevronDown className='icon-small'/></p>
    

    </div>
  </div>
)
export default Dashboard;
