import React from 'react'

import CustomButton from '../../component/custombutton/custombutton'
import PostContainer from '../../component/post-container/post-container'
const Articles = () => (
  <div>
    <div className="center" style={{ position: `fixed`, marginTop: `1rem` }}>
      <CustomButton>New Article</CustomButton>

    </div>
    <br />
    <br />
    <br />

    <PostContainer />

  </div>
)

export default Articles
