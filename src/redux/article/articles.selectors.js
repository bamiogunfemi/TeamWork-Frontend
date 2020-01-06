import {createSelector} from 'reselect'

const selectFeed = state => state.article

export const selectFeedItems = createSelector(
  [selectArticle],
  (article => article)
)


