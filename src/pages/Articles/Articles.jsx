import React from 'react'
import { selectArticleItems } from '../../redux/article/articles.selectors'
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../component/custombutton/custombutton'
import PostContainer from '../../component/post-container/post-container'
import {connect} from 'react-redux'

const Articles = ({ articles }) => (
  <div>
    <div className="center">
      <CustomButton>New Article</CustomButton>
    </div>
    <hr />
    {articles ?
      (articles.map(article =>
        <PostContainer article={article}
         key={article.id} />
      )) : <span className='empty-message'>
        No Article to Display</span>
    }
    
    </div>
)
const mapStateToProp = createStructuredSelector({
  articles: selectArticleItems
})

export default connect(selectArticleItems)(Articles)
