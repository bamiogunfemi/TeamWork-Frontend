import React from 'react'

import CustomButton from '../../component/custombutton/custombutton'
import PostContainer from '../../component/post-container/post-container'
const Articles = () => (
  <div>
    <div className="center">
      <CustomButton>Make Post</CustomButton>
    </div>
    <hr />
    <PostContainer />
  </div>
)

export default Articles
