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
      const response = await axios.get(`${process.env.REACT_APP_FEED}all`);
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
      //console.log("FETCHDELETEFEEDTHUNK IS FIRING");
      await axios.delete(`${process.env.REACT_APP_FEED}${id}`);
      //console.log("FETCHDELETEREFEEDTHUNK COMPLETED");
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
  return async (dispatch) => {
    try {
      //console.log("ADDFEEDTHUNK IS FIRING");
      const response = await axios.post(
        process.env.REACT_APP_FEED,
        newFeed
      );
      //console.log("ADDFEEDTHUNK COMPLETED");
      dispatch(addFeed(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

