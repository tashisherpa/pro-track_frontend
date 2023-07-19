import axios from "axios";
import AssignmentsStatusActionType from "./assignmentStatus.types";

export const fetchAllAssignmentsStatus = (payload) => {
  //console.log("FETCH ALL ASSIGNMENST STATUS ACTION");
  return {
    type: AssignmentsStatusActionType.FETCH_ALL_ASSIGNMENTS_STATUS,
    payload: payload,
  };
};

export const fetchAllAssignmentsStatusThunk = () => {
  return async (dispatch) => {
    try {
      //console.log("FETCHALLASSIGNMENTSSTATUSTHUNK IS FIRING");
      const response = await axios.get(`${process.env.REACT_APP_ASSIGNMENTS_STATUS}all`);
      //console.log("FETCHALLASSIGNMENTSSTATUSTHUNK COMPLETED");
      dispatch(fetchAllAssignmentsStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleAssignmentStatus = (payload) => {
  //console.log("FETCH SINGLE ASSIGNMENT STATUS ACTION");
  return {
    type: AssignmentsStatusActionType.FETCH_SINGLE_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const fetchSingleAssignmentsStatusThunk = (id) => {
  return async (dispatch) => {
    try {
      //console.log("FETCHSINGLEASSIGNMENTSSTATUSTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_ASSIGNMENTS_STATUS}${id}`
      );
      //console.log("FETCHSINGLEASSIGNMENTSSTATUSTHUNK COMPLETED");
      dispatch(fetchSingleAssignmentStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchStudentAssignmentsStatus = (payload) => {
    //console.log("FETCH STUDENT ASSIGNMENTS STATUS ACTION");
    return {
      type: AssignmentsStatusActionType.FETCH_STUDENT_ASSIGNMENTS_STATUS,
      payload: payload,
    };
};

export const fetchStudentAssignmentsStatusThunk = (assignmentStatus) => {
    return async (dispatch) => {
      try {
        //console.log("FETCHSTUDENTASSIGNMENTSSTATUSTHUNK IS FIRING");
        const response = await axios.get(`${process.env.REACT_APP_ASSIGNMENTS_STATUS}${assignmentStatus.id}/${assignmentStatus.assignmentId}`);
        //console.log("FETCHALLASSIGNMENTSSTATUSTHUNK COMPLETED");
        dispatch(fetchStudentAssignmentsStatus(response.data));
      } catch (error) {
        console.error(error);
      }
    };
  };

export const addAssignmentStatus = (payload) => {
  //console.log("ADD ASSIGNMENT STATUS ACTIVE");
  return {
    type: AssignmentsStatusActionType.ADD_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const addAssignmentStatusThunk = (newAssignmentStatus) => {
  return async (dispatch) => {
    try {
      //console.log("ADDASSIGNMENTSSTATUSTHUNK IS FIRING");
      const response = await axios.post(
        process.env.REACT_APP_ASSIGNMENTS_STATUS,
        newAssignmentStatus
      );
      //console.log("ADDASSIGNMENTSSTATUSTHUNK COMPLETED");
      dispatch(addAssignmentStatus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editAssignmentStatus = (payload) => {
  //console.log("EDIT ASSIGNMENT STATUS ACTION ACTIVE");
  return {
    type: AssignmentsStatusActionType.EDIT_ASSIGNMENT_STATUS,
    payload: payload,
  };
};

export const editAssignmentStatusThunk = (assignmentStatus) => {
  return async (dispatch) => {
    try {
      //console.log("EDITASSIGNMENTSSTATUSTHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_ASSIGNMENTS_STATUS}${assignmentStatus.id}/${assignmentStatus.assignmentId}`,
        assignmentStatus
      );
      //console.log("EDITASSIGNMENTSSTATUSTHUNK COMPLETED");
      dispatch(editAssignmentStatus(response.data));
      //console.log("Edit Assignment Status Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};