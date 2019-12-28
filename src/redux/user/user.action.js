import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});



export const SignInStart = emailAndPassword => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword
});

export const SignInSucces = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});



export const SignUpStart = userCredential => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredential
});

export const SignUpSuccess = ({ user, additionalData}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload:{ user, additionalData}
});

export const SignUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});




export const SignOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const SignOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const SignOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
