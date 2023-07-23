import FeedActionType from "./feed.types";

//define the initial state for all feed array 
export const INITIAL_FEED_STATE = {
  allFeed: [],
};

//handle the action type
const feed = (state = INITIAL_FEED_STATE, action) => {
  //console.log("FEEDREDUCER IS HANDLING FETCH ALL FEED ACTION");
  switch (action.type) {
    case FeedActionType.FETCH_ALL_FEED:
      return { ...state, allFeed: action.payload };
    case FeedActionType.DELETE_FEED:
      return {
        ...state,
        allFeed: state.allFeed.filter(
          (feed) => feed.id !== action.payload
        ),
      };
    case FeedActionType.ADD_FEED:
      return {
        ...state,
        allFeed: [...state.allFeed, action.payload],
      };
    default:
      return state;
  }
};

export default feed;