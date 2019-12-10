import React from 'react'
import Sidebar from '../../component/sidebar/sidebar'

const Feed =()=>(
  <div>
     <FormInput  placeholder='Search' searchInput/>
      <hr/>
    
    <p className='big'>Recent <FaChevronDown className='icon-small'/></p>
    <PostContainer/>

  </div>
)

export react Feed
