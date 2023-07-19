import axios from "axios";
import HelpRequestActionType from "./helprequest.types";

export const fetchAllHelpRequests = (payload) => {
  //console.log("FETCH ALL HELP REQUESTS ACTION");
  return {
    type: HelpRequestActionType.FETCH_ALL_HELP_REQUESTS,
    payload: payload,
  };
};

export const fetchAllHelpRequestsThunk = () => {
  return async (dispatch) => {
    try {
      //console.log("FETCHALLHELPREQUESTSTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_HELP_REQUESTS}all`
      );
      //console.log("FETCHALLHELPREQUESTSTHUNK COMPLETED");
      dispatch(fetchAllHelpRequests(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteHelpRequest = (payload) => {
  //console.log("DELETE HELP REQUEST ACTION ACTIVE");
  return {
    type: HelpRequestActionType.DELETE_HELP_REQUEST,
    payload: payload,
  };
};

export const deleteHelpRequestThunk = (id) => {
  return async (dispatch) => {
    try {
      //console.log("DELETEHELPREQUESTTHUNK IS FIRING");
      await axios.delete(`${process.env.REACT_APP_HELP_REQUESTS}${id}`);
      //console.log("DELETEHELPREQUESTTHUNK COMPLETED");
      dispatch(deleteHelpRequest(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addHelpRequest = (payload) => {
  //console.log("ADD HELP REQUEST ACTIVE");
  return {
    type: HelpRequestActionType.ADD_HELP_REQUEST,
    payload: payload,
  };
};

export const addHelpRequestThunk = (newResource) => {
  return async (dispatch) => {
    try {
      //console.log("ADDHELPREQUESTTHUNK IS FIRING");
      const response = await axios.post(
        process.env.REACT_APP_HELP_REQUESTS,
        newResource
      );
      //console.log("ADDHELPREQUESTTHUNK COMPLETED");
      dispatch(addHelpRequest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editHelpRequest = (payload) => {
  //console.log("EDIT HELP REQUEST ACTION ACTIVE");
  return {
    type: HelpRequestActionType.EDIT_HELP_REQUEST,
    payload: payload,
  };
};

export const editHelpRequestThunk = (resource) => {
  return async (dispatch) => {
    try {
      //console.log("EDITHELPREQUESTTHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_HELP_REQUESTS}${resource.id}`,
        resource
      );
      //console.log("EDITHELPREQUESTTHUNK COMPLETED");
      dispatch(editHelpRequest(response.data));
      //console.log("Edit Resource Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
