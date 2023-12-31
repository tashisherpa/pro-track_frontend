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
      // console.log("FETCHALLHELPREQUESTSTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/help-request/`
      );
      // console.log("FETCHALLHELPREQUESTSTHUNK COMPLETED");
      dispatch(fetchAllHelpRequests(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleHelpRequest = (payload) => {
  return {
    type: HelpRequestActionType.FETCH_SINGLE_HELP_REQUEST,
    payload: payload,
  };
};

export const fetchSingleHelpRequestThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/help-request/${id}`
      );
      //console.log("FETCHALLLECTURESTHUNK COMPLETED");
      dispatch(fetchSingleHelpRequest(response.data));
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
  return async (dispatch, getState) => {
    try {
      //console.log("DELETEHELPREQUESTTHUNK IS FIRING");
      const { socket } = getState().socket;
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/help-request/${id}`
      );
      //console.log("DELETEHELPREQUESTTHUNK COMPLETED");
      dispatch(deleteHelpRequest(id));
      socket.emit("deleteRequest", id);
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

export const addHelpRequestThunk = (newRequest) => {
  return async (dispatch, getState) => {
    try {
      console.log(getState().socket);
      const { socket } = getState().socket;
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/help-request/`,
        newRequest
      );
      socket.emit("addNewRequest", response.data);
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

export const editHelpRequestThunk = (helpRequest) => {
  return async (dispatch, getState) => {
    try {
      const { socket } = getState().socket;
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/help-request/${helpRequest.id}`,
        helpRequest
      );
      socket.emit("editRequest", response.data);
      dispatch(editHelpRequest(response.data));
      console.log("Edit Resource Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
