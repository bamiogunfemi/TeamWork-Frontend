import React, { useEffect, useState } from 'react'
import SearchField from '../../component/searchfield/searchfield'
import PostContainer from '../../component/post-container/post-container'
import { FaChevronDown } from 'react-icons/fa';
import { useFirestoreConnect } from 'react-redux-firebase'
import './feed.scss'
import Loader from "react-loader-spinner";

import firebase from 'firebase'
const Feed = ({ articles }) => {
  useFirestoreConnect([
    { collection: 'articles' }
  ])
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getFeed = async () => {
      setLoading(true)
      const snapshot = await firebase.firestore().collection("articles").get()
      setLoading(false)
      const collection = {};
      setLoading(false)
      snapshot.forEach(doc => {
        collection[doc.id] = doc.data();
      });
      setLoading(false)
      setPost(collection)

      return collection;
    }
    getFeed();
  }, []);
  console.log(post)
  return (

    <div>
      <SearchField />

      <p className='big'>Recent <FaChevronDown className='icon-small' /></p>
      {loading ? <Loader
        type="Puff"
        color="#1b1a72"
        height={100}
        width={100}
        timeout={3000}
      /> :
        post && loading === false ? (
          post && Object.keys(post).map((item, i) =>
            <PostContainer feed={post[item]} key={post[item].articleID} />)
        ) :
          <span className='empty-message'>Your Feed is Empty</span>
      }


    </div>
  )
}
export default Feed;
