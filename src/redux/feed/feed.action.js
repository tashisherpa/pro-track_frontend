import axios from "axios";
import FeedActionType from "./feed.types";

export const fetchAllFeed = (payload) => {
  //console.log("FETCH ALL FEED ACTION");
  return {
    type: FeedActionType.FETCH_ALL_FEED,
    payload: payload,
  };
};

export const fetchAllFeedThunk = () => {
  return async (dispatch) => {
    try {
      //console.log("FETCHALLFEEDTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/feed/all`
      );
      //console.log("FETCHALLFEEDTHUNK COMPLETED");
      dispatch(fetchAllFeed(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteFeed = (payload) => {
  //console.log("DELETE FEED ACTION ACTIVE");
  return {
    type: FeedActionType.DELETE_FEED,
    payload: payload,
  };
};

export const deleteFeedThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/feed/${id}`
      );

      dispatch(deleteFeed(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addFeed = (payload) => {
  //console.log("ADD USER FEED ACTIVE");
  return {
    type: FeedActionType.ADD_FEED,
    payload: payload,
  };
};

export const addFeedThunk = (newFeed) => {
  return async (dispatch, getState) => {
    try {
      const { socket } = getState().socket;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/feed/`,
        newFeed
      );
      socket.emit("addNewPost", response.data);
      dispatch(addFeed(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
