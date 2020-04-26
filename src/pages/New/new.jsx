import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { useHistory, Redirect, useLocation } from "react-router-dom";

import './new.scss'
const New = () => {
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

  const addNew = (postTitle, postContent) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("articles")
      .add({
        postTitle: postTitle,
        postContent: postContent

      })
      .then((docRef) => {
        docRef.update(
          {
            articleID: docRef.id
          }

        );
      });
  };


  return (

    <div className="form-container">
      <form className="form">
        <div className="label-input-container">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="postTitle"
            value={postTitle}
            onChange={handleChange}
          />
        </div>
        <div className="label-input-container">
          <textarea name="postContent" onChange={handleChange}
            value={postContent} cols="37" rows="8">
          </textarea>

        </div>
        <button onClick={
          addNew(postTitle, postContent)
        }>
          Post New Article
        </button>
      </form>
    </div>

  )
}
export default New




