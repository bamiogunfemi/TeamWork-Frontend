import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

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

    history.push("/dashboard/articles");
    console.log(uid);
  };


  return (
    <form >
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
        <label htmlFor="text">Title</label>
        <textarea name="postContent" onChange={handleChange}
          value={postContent} cols="30" rows="10">
        </textarea>

      </div>
      <button onClick={
        addNew(postTitle, postContent)
      }>
        Add Sample Todo
        </button>
    </form>

  )
}
export default New





