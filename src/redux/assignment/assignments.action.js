import axios from "axios";
import AssignmentActionType from "./assignments.types";

export const fetchAllAssignments = (payload) => {
  //console.log("FETCH ALL ASSIGNMENTS ACTION");
  return {
    type: AssignmentActionType.FETCH_ALL_ASSIGNMENTS,
    payload: payload,
  };
};

export const fetchAllAssignmentsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment/all`
      );
      dispatch(fetchAllAssignments(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleAssignment = (payload) => {
  return {
    type: AssignmentActionType.FETCH_SINGLE_ASSIGNMENT,
    payload: payload,
  };
};

export const fetchSingleAssignmentThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment/${id}`
      );

      dispatch(fetchSingleAssignment(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteAssignment = (payload) => {
  return {
    type: AssignmentActionType.DELETE_ASSIGNMENT,
    payload: payload,
  };
};

export const deleteAssignmentThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment/${id}`
      );

      dispatch(deleteAssignment(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAssignment = (payload) => {
  return {
    type: AssignmentActionType.ADD_ASSIGNMENT,
    payload: payload,
  };
};

export const addAssignmentThunk = (newAssignment) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment/`,
        newAssignment
      );

      dispatch(addAssignment(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editAssignment = (payload) => {
  return {
    type: AssignmentActionType.EDIT_ASSIGNMENT,
    payload: payload,
  };
};

export const editAssignmentThunk = (assignment) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment/${assignment.id}`,
        assignment
      );

      dispatch(editAssignment(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
