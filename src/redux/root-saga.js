import { all, call } from "redux-saga/effects";
import {feedStart} from './feed/feed.saga'
import {userSagas} from './user/user.saga'

export default function* rootSaga() {
  yield all([call(feedStart), call(userSagas)]);
}
