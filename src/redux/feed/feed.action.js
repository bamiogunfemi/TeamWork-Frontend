import FeedActionTypes from './feed.types'

export const feedStart =()=>({
type: FeedActionTypes.FEED_START
});

export const feedSuccess =(feeds)=>({
  type: FeedActionTypes.FEED_FETCH_SUCCESS,
  payload: feeds
});

export const feedFailure =(error) =>({
  type: FeedActionTypes.FEED_FETCH_FAILURE,
  payload: error

});
