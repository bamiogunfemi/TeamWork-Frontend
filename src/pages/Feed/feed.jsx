import React from 'react'
import FormInput from '../../component/formInput/formInput'
import PostContainer from '../../component/post-container/post-container'
import { FaChevronDown} from 'react-icons/fa';

const Feed = () => (
  <div>
    <FormInput placeholder='Search' searchInput />
    <hr />

    <p className='big'>Recent <FaChevronDown className='icon-small' /></p>
    <PostContainer author={'bam'}  />

  </div>
)

export default Feed
