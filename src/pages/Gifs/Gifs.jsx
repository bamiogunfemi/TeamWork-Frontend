import React from 'react'
import CustomButton from '../../component/custombutton/custombutton'
import PostContainer from '../../component/post-container/post-container'
const Gifs =()=>(
  <div>
   
   <div className="center" style ={{position: `fixed`, }}>
      <CustomButton>Post GIF</CustomButton>
    </div>
    <hr />
    <PostContainer />
  </div>
)

export default Gifs
