import React from 'react'
import { FaCommentAlt, FaTrash, FaEdit } from 'react-icons/fa';

const PostContainer = ({ feed: { date, author, postContent, icons } }) => (

  <div className="">
    <article className="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
      <div className="tc">

        <h1 className="f4">{author}</h1>
      </div>
      <div className="tc">
        <p className="lh-copy measure center f3 black-70">
          {postContent}
        </p>
      </div>

      <div className="" style={{ textAlign: 'end' }}>

        <p class='f5'>{date}</p>
      </div>

    </article>



  </div>
)

export default PostContainer;
