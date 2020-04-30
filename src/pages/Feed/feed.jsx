import React from 'react'
import SearchField from '../../component/searchfield/searchfield'
import PostContainer from '../../component/post-container/post-container'
import { FaChevronDown } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import './feed.scss'
const Feed = ({ feeds }) => {
  useFirestoreConnect([
    { collection: 'feeds' }
  ])
  const feed = useSelector(state => state.firestore.feeds)


  return (

    <div>
      <SearchField />

      <p className='big'>Recent <FaChevronDown className='icon-small' /></p>
      {feeds ? (
        feeds.map(feed =>
          <PostContainer feed={feed} key={feed.id} />)
      ) :
        <span className='empty-message'>Your Feed is Empty</span>
      }


    </div>
  )
}
export default Feed;
