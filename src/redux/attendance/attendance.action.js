import axios from "axios";
import AttendanceActionType from "./attendance.types";

export const fetchAttendance = (payload) => {
  return {
    type: AttendanceActionType.FETCH_ATTENDANCE,
    payload: payload,
  };
};

export const fetchAttendanceThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/attendance/`
      );
      dispatch(fetchAttendance(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//stores an object with the type single user and adds user's info to the payload
//returns the object with the single user info
export const fetchStudentAttendance = (payload) => {
  //console.log("FETCH SINGLE USER ACTION");
  return {
    type: AttendanceActionType.FETCH_USER_ATTENDANCE,
    payload: payload,
  };
};

//gets the single user info from database in response const
//and response const data is dispatched to the fetchSingleUser func
//which stores the user's info in the object payload and returns the object
export const fetchStudentAttendanceThunk = (id) => {
  return async (dispatch) => {
    //console.log(id);
    try {
      //console.log("FETCHSINGLEUSERSTHUNK IS FIRING");
      //console.log(id);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/attendance/${id}`
      );
      dispatch(fetchStudentAttendance(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addStudentToAttendance = (payload) => {
  //console.log("ADD USER FEED ACTIVE");
  return {
    type: AttendanceActionType.ADD_ATTENDANCE,
    payload: payload,
  };
};

export const addStudentToAttendanceThunk = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/attendance/`,
        userId
      );
      dispatch(addStudentToAttendance(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editStudentAttendance = (payload) => {
  return {
    type: AttendanceActionType.EDIT_ATTENDANCE,
    payload: payload,
  };
};

export const editStudentAttendanceThunk = (update) => {
  return async (dispatch) => {
    try {
      console.log("Attendance status:", update);
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/attendance/`,
        update
      );
      dispatch(editStudentAttendance(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
