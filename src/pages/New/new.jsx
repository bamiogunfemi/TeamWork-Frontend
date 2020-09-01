import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import './new.scss';
import { Grid, Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const giphyFetch = new GiphyFetch("4ktTKEOcAx28h9OemI1Av5dYTtGSP57t");

const New = ({ close }) => {
  const firestore = useFirestore();
  const history = useHistory();
  const [modalGif, setModalGif] = useState();
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
  function GridDemo({ onGifClick }) {
    const fetchGifs = (offset) =>
      giphyFetch.trending({ offset, limit: 10 });
    return (
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        columns={3}
        width={800}
        gutter={9}
      />
    );
  }
  const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 50 })
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

    <div className="">
     <GridDemo
        onGifClick={(gif) => {
          console.log("gif", gif);
          
          
        }}
      />

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
          <button onClick={
               <GridDemo
               onGifClick={(gif, e) => {
                 console.log("gif", gif);
                 e.preventDefault();
                 setModalGif(gif);
               }}
             />
          } > <img alt='gif' className='gif-icon' src="https://img.icons8.com/ios/40/000000/gif.png" /></button>
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

    </div>
  );
}
export default New




