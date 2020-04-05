import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});


export const signInStart = emailAndPassword => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const userSession = () => ({
  type:UserActionTypes.USER_SESSION
});

export const signUpStart = userCredential => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredential
});

export const signUpSuccess = ({ user, message}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload:{ user, message}
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});




export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
