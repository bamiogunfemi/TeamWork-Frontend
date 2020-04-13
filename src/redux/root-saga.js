import { all, call } from "redux-saga/effects";
import {feedStart} from './feed/feed.saga'

export default function* rootSaga() {
  yield all([call(feedStart),]);
}
