import React from 'react'

import CustomButton from '../../component/custombutton/custombutton'
import PostContainer from '../../component/post-container/post-container'
const Articles =()=>(
  <div>
    <div className="center">
     <p className='big'>Make Post</p>
     <textarea name="" id="" cols="60" rows="10" placeholder="What's up, Bami?"></textarea>
      <CustomButton>Post</CustomButton>
      </div>
      <hr/>
      <PostContainer/>
  </div>
)

export default Articles
