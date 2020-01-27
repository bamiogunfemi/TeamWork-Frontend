import ArticleActionTypes from './article.types'

const INITIAL_STATE ={
  articles: {
    author: '',
    post :''
  },
  isLoading: false,
  error:false
}

const articleReducer = ( state =INITIAL_STATE, action )=>{
  switch(action.type){
case ArticleActionTypes.ARTICLE_START:
  return{
    ...state,
    isLoading: true
  };
  case ArticleActionTypes.ARTICLE_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      post: action.payload
    };
    case ArticleActionTypes.ARTICLE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  
  default:
   return state;
}
}
export default articleReducer
