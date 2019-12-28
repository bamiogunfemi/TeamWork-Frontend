import { call, takeLatest, put } from "redux-saga/effects";
import feedActionTypes from "./feed.types";
import axios from "axios";
import { feedFailure, feedSuccess } from "./feed.action";

export function* fetchFeedAsync() {
  try {
    const res = axios;
    const snapshot = res.get(`${process.env.REACT_APP_BACKEND_URL}/talks`);
    const fetch = (snapshot.then = yield call(fetch => fetch.data));
    yield put(feedSuccess(fetch));
  } catch (error) {
    yield put(feedFailure(error.message));
  }
}

export function* feedStart() {
  yield takeLatest(feedActionTypes.FEED_START, fetchFeedAsync);
}
