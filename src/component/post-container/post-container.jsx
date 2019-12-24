import React from 'react'
import { FaCommentAlt, FaTrash, FaEdit } from 'react-icons/fa';

const PostContainer = ({author,post,icons}) => (
 
  <div className="">
    <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
      <div class="tc">

        <h1 class="f4">{author}</h1>
      </div>
      <div className="tc">
        <p class="lh-copy measure center f6 black-70">
          {post}
  </p>
      </div>

      <div className="" style={{display:'flex', justifyContent:'flex-end'}}>
       
        <FaCommentAlt />
       
        </div>

    </article>



  </div>
)

export default PostContainer;
