import axios from "axios";
import AssignmentActionType from "./assignments.types";

export const fetchAllAssignments = (payload) => {
  console.log("FETCH ALL RESOURCES ACTION");
  return {
    type: AssignmentActionType.FETCH_ALL_ASSIGNMENTS,
    payload: payload,
  };
};

export const fetchAllAssignmentsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLASSIGNMENTSTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_HELP_ASSIGNMENTS}all`
      );
      console.log("FETCHALLASSIGNMENTSTHUNK COMPLETED");
      dispatch(fetchAllAssignments(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleAssignment = (payload) => {
  console.log("FETCH SINGLE RESOURCE ACTION");
  return {
    type: AssignmentActionType.FETCH_SINGLE_ASSIGNMENT,
    payload: payload,
  };
};

export const fetchSingleAssignmentThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCHSINGLEASSIGNMENTTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_HELP_ASSIGNMENTS}${id}`
      );
      console.log("FETCHSINGLEASSIGNMENTTHUNK COMPLETED");
      dispatch(fetchSingleAssignment(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteAssignment = (payload) => {
  console.log("DELETE ASSIGNMENT ACTION ACTIVE");
  return {
    type: AssignmentActionType.DELETE_RESOURCE,
    payload: payload,
  };
};

export const deleteAssignmentThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCHDELETEASSIGNMENTTHUNK IS FIRING");
      await axios.delete(`${process.env.REACT_APP_HELP_ASSIGNMENTS}${id}`);
      console.log("FETCHDELETEASSIGNMENTTHUNK COMPLETED");
      dispatch(deleteAssignment(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAssignment = (payload) => {
  console.log("ADD ASSIGNMENT ACTIVE");
  return {
    type: AssignmentActionType.ADD_RESOURCE,
    payload: payload,
  };
};

export const addAssignmentThunk = (newAssignment) => {
  return async (dispatch) => {
    try {
      console.log("ADDASSIGNMENTTHUNK IS FIRING");
      const response = await axios.post(
        process.env.REACT_APP_HELP_ASSIGNMENTS,
        newAssignment
      );
      console.log("ADDASSIGNMENTTHUNK COMPLETED");
      dispatch(addAssignment(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editAssignment = (payload) => {
  console.log("EDIT ASSIGNMENT ACTION ACTIVE");
  return {
    type: AssignmentActionType.EDIT_RESOURCE,
    payload: payload,
  };
};

export const editAssignmentThunk = (assignment) => {
  return async (dispatch) => {
    try {
      console.log("EDITASSIGNMENTTHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_HELP_ASSIGNMENTS}${assignment.id}`,
        assignment
      );
      console.log("EDITASSIGNMENTTHUNK COMPLETED");
      dispatch(editAssignment(response.data));
      console.log("Edit Assignment Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
