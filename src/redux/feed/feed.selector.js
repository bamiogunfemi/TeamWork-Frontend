import {createSelector} from 'reselect'

const selectFeed = state => state.feeds

export const selectFeedItems = createSelector(
  [selectFeed],
  (feeds => feeds)
)


