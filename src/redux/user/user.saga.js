import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  signInFailure,
 signInSuccess,
 signOutSuccess,
 signUpSuccess,
 signUpFailure,
 signOutFailure
} from "./user.action";
import axios from "axios";

export function* SignUp({
  payload: {
    firstName,
    lastName,
    password,
    email,
    confirmPassword,
    jobRole,
    gender,
    address
  }
}) {
  try {
    const user = yield {
      firstName,
      lastName,
      password,
      email,
      confirmPassword,
      jobRole,
      gender,
      address
    };
    const fetchApi = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/create-user`,
      { user }
    );
    const res = fetchApi.then(res => res.data);

    yield put(signUpSuccess({ res }, "success"));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* SignIn({ payload: { email, password } }) {
  try {
    const { user } = yield { email, password };
    const fetchApi = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/signin`,
      { user }
    );
    const res = fetchApi.then(res => res.data);

    yield put(signInSuccess({ res }, "success"));
  } catch (error) {
    yield put(signInFailure(error, "Error Signing In"));
  }
}

export function* SignOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error, "Error signing out"));
  }
}

export function* onSignoutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, SignOut);
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, SignUp);
}
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, SignIn);
}
 // eslint-disable-next-line 
export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart), call(onSignoutStart)]);
}
