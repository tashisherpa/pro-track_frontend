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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/all`
      );
      dispatch(fetchAllResources(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleResource = (payload) => {
  return {
    type: ResourceActionType.FETCH_SINGLE_RESOURCE,
    payload: payload,
  };
};

export const fetchSingleResourceThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${id}`
      );
      dispatch(fetchSingleResource(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteResource = (payload) => {
  return {
    type: ResourceActionType.DELETE_RESOURCE,
    payload: payload,
  };
};

export const deleteResourceThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${id}`
      );
      dispatch(deleteResource(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addResource = (payload) => {
  return {
    type: ResourceActionType.ADD_RESOURCE,
    payload: payload,
  };
};

export const addResourceThunk = (newResource) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/`,
        newResource
      );
      dispatch(addResource(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editResource = (payload) => {
  return {
    type: ResourceActionType.EDIT_RESOURCE,
    payload: payload,
  };
};

export const editResourceThunk = (resource) => {
  return async (dispatch) => {
    try {
      console.log(resource);
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/resource/${resource.id}`,
        resource
      );
      dispatch(editResource(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
