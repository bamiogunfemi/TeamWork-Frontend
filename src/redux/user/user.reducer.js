import UserActionTypes from './user.types'

const INITIAL_STATE ={
  currentUser: null, 
  error: null,
  message: null
}

const userReducer =(state= INITIAL_STATE, action)=>{
  switch(action.type){
    case UserActionTypes.SIGN_IN_SUCCESS:
      return{
        ...state,
        currentUser: action.payload,
        error:null,
        message: action.message
      };
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser:null,
          error:null,
          message:action.message
        };

        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
          return{
            ...state,
            error:action.payload
          }
        default: 
        return state;
  }
}
export default userReducer;
