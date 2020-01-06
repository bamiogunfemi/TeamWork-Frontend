import ArticleActionTypes from './article.types'

export const articleStart =()=>({
type: FeedActionTypes.ARTICLE_START
});

export const articleSuccess =(article)=>({
  type: ArticleActionTypes.ARTICLE_FETCH_SUCCESS,
  payload: article
});

export const articleFailure =(error) =>({
  type: ArticleActionTypes.ARTICLE_FETCH_FAILURE,
  payload: error

});
