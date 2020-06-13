import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import './new.scss';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch("4ktTKEOcAx28h9OemI1Av5dYTtGSP57t");

const New = ({ close }) => {
  const firestore = useFirestore();
  const history = useHistory();

  const { uid } = useSelector((state) => state.firebase.auth);

  const [newCredentials, setCredentials] = useState({
    postTitle: '',
    postContent: ''
  });
  const { postTitle, postContent } = newCredentials;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...newCredentials, [name]: value });
  };

  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })
  const addNew = (postContent) => {

    firestore
      .collection("users")
      .doc(uid)
      .collection("articles")
      .add({

        postContent: postContent

      })
      .then((docRef) => {
        docRef.update(
          {
            articleID: docRef.id
          }

        );
      });

    setCredentials({

      postContent: postContent
    });
  };


  return (


    <div className="modal">
      <span className="close" alt='close' onClick={close}>
        <MdClear />
      </span>

      <div className="content">
        <form className="form">
          <textarea name="postContent" rows="5" placeholder="What's Up?" className='textarea' onChange={handleChange}
            value={postContent}>
          </textarea>

        </form>
      </div>
      <div className="actions">
        <img alt='gif' className='gif-icon' src="https://img.icons8.com/ios/40/000000/gif.png" onClick={<Grid width={800} columns={3} fetchGifs={fetchGifs} />} />
        <button class='post-button' onClick={
          (e) => {
            e.preventDefault();
            addNew(postTitle, postContent)
          }

        }>
          Post
          </button>

      </div>
    </div>


  );
}
export default New




