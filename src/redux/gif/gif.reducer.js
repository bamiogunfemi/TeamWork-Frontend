import GifActionTypes from './gif.types'

const INITIAL_STATE ={
  isLoading: false,
  gif: {
    author: '',
    post :''
  }
}

const GifReducer = ( state =INITIAL_STATE, action )=>{
  switch(action.type){
case GifActionTypes.GIF_START:
  return{
    ...state,
    isLoading: true
  };
  case GifActionTypes.GIF_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      post: action.payload
    };
  
    case GifActionTypes.GIF_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    
  default:
   return state;
}
}
export default GifReducer
