import { call, takeLatest, put } from "redux-saga/effects";
import feedActionTypes from "./feed.types";
import { feedFailure, feedSuccess } from "./feed.action";

export function* fetchFeedAsync() {
  try {
  
  } catch (error) {
    yield put(feedFailure(error.message));
  }
}

export function* feedStart() {
  yield takeLatest(feedActionTypes.FEED_START, fetchFeedAsync);
}
