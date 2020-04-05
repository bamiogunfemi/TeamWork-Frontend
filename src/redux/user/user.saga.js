import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  signOutFailure,
} from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* SignUp({ payload: { email, password, additionalData } }) {
  try {
    const { user } = yield auth().createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpSuccess({ user }, "success"));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* SignIn({ payload: { email, password } }) {
  try {
    const { user } = yield { email, password };
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error, "Error Signing In"));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* SignOut() {
  try {
    yield auth.signOut();
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
export function* onUserSession() {
  yield takeLatest(UserActionTypes.USER_SESSION, isUserAuthenticated);
}
// eslint-disable-next-line
export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(isUserAuthenticated),
    call(onSignoutStart),
  ]);
}
