import { call, takeLatest, put } from "redux-saga/effects";
import ArticleActionTypes from "./article.types";
import axios from "axios";
import { articleFailure, articleSuccess } from "./feed.action";

export function* fetchArticleAsync() {
  try {
    const res = axios;
    const snapshot = res.get(`${process.env.REACT_APP_BACKEND_URL}/articles`);
    const fetch = (snapshot.then = yield call(fetch => fetch.data));
    yield put(articleSuccess(fetch));
  } catch (error) {
    yield put(articleFailure(error.message));
  }
}

export function* articleStart() {
  yield takeLatest(ArticleActionTypes.ARTICLE_START, fetchArticleAsync);
}
