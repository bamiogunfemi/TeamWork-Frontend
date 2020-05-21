import { createSelector } from "reselect";

const selectArticle = state => state.article;

export const selectArticleItems = createSelector(
  [selectArticle],
  article => article
);
