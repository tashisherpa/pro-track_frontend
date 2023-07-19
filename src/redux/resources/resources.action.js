import axios from "axios";
import ResourceActionType from "./resources.types";

export const fetchAllResources = (payload) => {
  //console.log("FETCH ALL RESOURCES ACTION");
  return {
    type: ResourceActionType.FETCH_ALL_RESOURCES,
    payload: payload,
  };
};

export const fetchAllResourcesThunk = () => {
  return async (dispatch) => {
    try {
      //console.log("FETCHALLRESOURCESTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/all`
      );
      //console.log("FETCHALLRESOURCESTHUNK COMPLETED");
      dispatch(fetchAllResources(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleResource = (payload) => {
  //console.log("FETCH SINGLE RESOURCE ACTION");
  return {
    type: ResourceActionType.FETCH_SINGLE_RESOURCE,
    payload: payload,
  };
};

export const fetchSingleResourceThunk = (id) => {
  return async (dispatch) => {
    try {
      //console.log("FETCHSINGLERESOURCETHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${id}`
      );
      //console.log("FETCHSINGLERESOURCETHUNK COMPLETED");
      dispatch(fetchSingleResource(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteResource = (payload) => {
  //console.log("DELETE RESOURCE ACTION ACTIVE");
  return {
    type: ResourceActionType.DELETE_RESOURCE,
    payload: payload,
  };
};

export const deleteResourceThunk = (id) => {
  return async (dispatch) => {
    try {
      //console.log("FETCHDELETERESOURCETHUNK IS FIRING");
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${id}`
      );
      //console.log("FETCHDELETERESOURCETHUNK COMPLETED");
      dispatch(deleteResource(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addResource = (payload) => {
  //console.log("ADD USER RESOURCE ACTIVE");
  return {
    type: ResourceActionType.ADD_RESOURCE,
    payload: payload,
  };
};

export const addResourceThunk = (newResource) => {
  return async (dispatch) => {
    try {
      //console.log("ADDRESOURCESTHUNK IS FIRING");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/`,
        newResource
      );
      //console.log("ADDRESOURCESTHUNK COMPLETED");
      dispatch(addResource(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editResource = (payload) => {
  //console.log("EDIT RESOURCE ACTION ACTIVE");
  return {
    type: ResourceActionType.EDIT_RESOURCE,
    payload: payload,
  };
};

export const editResourceThunk = (resource) => {
  return async (dispatch) => {
    try {
      //console.log("EDITRESOURCETHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${resource.id}`,
        resource
      );
      //console.log("EDITRESOURCETHUNK COMPLETED");
      dispatch(editResource(response.data));
      //console.log("Edit Resource Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
