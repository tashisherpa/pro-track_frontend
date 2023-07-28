import axios from "axios";
import AssignmentsStatusActionType from "./assignmentStatus.types";

export const fetchAllAssignmentsStatus = (payload) => {
  return {
    type: AssignmentsStatusActionType.FETCH_ALL_ASSIGNMENTS_STATUS,
    payload: payload,
  };
};

export const fetchAllAssignmentsStatusThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment-status/all`
      );

      dispatch(fetchAllAssignmentsStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleAssignmentStatus = (payload) => {
  return {
    type: AssignmentsStatusActionType.FETCH_SINGLE_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const fetchSingleAssignmentsStatusThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment-status/${id}`
      );

      dispatch(fetchSingleAssignmentStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchStudentAssignmentsStatus = (payload) => {
  return {
    type: AssignmentsStatusActionType.FETCH_STUDENT_ASSIGNMENTS_STATUS,
    payload: payload,
  };
};

export const fetchStudentAssignmentsStatusThunk = (assignmentStatus) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment-status/${assignmentStatus.id}/${assignmentStatus.assignmentId}`
      );

      dispatch(fetchStudentAssignmentsStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAssignmentStatus = (payload) => {
  return {
    type: AssignmentsStatusActionType.ADD_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const addAssignmentStatusThunk = (newAssignmentStatus) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment-status/`,
        newAssignmentStatus
      );
      dispatch(addAssignmentStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editAssignmentStatus = (payload) => {
  return {
    type: AssignmentsStatusActionType.EDIT_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const editAssignmentStatusThunk = (assignmentStatus) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/assignment-status/${assignmentStatus.id}`,
        assignmentStatus
      );

      dispatch(editAssignmentStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
