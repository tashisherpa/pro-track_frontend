import axios from "axios";
import LectureActionType from "./lectures.types";

export const fetchAllLectures = (payload) => {
  //console.log("FETCH ALL LECTURES ACTION");
  return {
    type: LectureActionType.FETCH_ALL_LECTURES,
    payload: payload,
  };
};

export const fetchAllLecturesThunk = () => {
  return async (dispatch) => {
    try {
      //console.log("FETCHALLLECTURESTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/all`
      );
      //console.log("FETCHALLLECTURESTHUNK COMPLETED");
      dispatch(fetchAllLectures(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleLecture = (payload) => {
  return {
    type: LectureActionType.FETCH_SINGLE_LECTURE,
    payload: payload,
  };
};

export const fetchSingleLectureThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/${id}`
      );
      //console.log("FETCHALLLECTURESTHUNK COMPLETED");
      dispatch(fetchSingleLecture(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteLecture = (payload) => {
  //console.log("DELETE LECTURE ACTION ACTIVE");
  return {
    type: LectureActionType.DELETE_LECTURE,
    payload: payload,
  };
};

export const deleteLectureThunk = (id) => {
  return async (dispatch) => {
    try {
      //console.log("FETCHDELETELECTURETHUNK IS FIRING");
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/${id}`
      );
      //console.log("FETCHDELETELECTURETHUNK COMPLETED");
      dispatch(deleteLecture(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addLecture = (payload) => {
  //console.log("ADD USER LECTURE ACTIVE");
  return {
    type: LectureActionType.ADD_LECTURE,
    payload: payload,
  };
};

export const addLectureThunk = (newLecture) => {
  return async (dispatch) => {
    try {
      console.log("ADDLECTURESTHUNK IS FIRING");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/`,
        newLecture
      );
      console.log("ADDLECTURESTHUNK COMPLETED");
      console.log("lecture: ", response.data);
      dispatch(addLecture(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editLecture = (payload) => {
  //console.log("EDIT LECTURE ACTION ACTIVE");
  return {
    type: LectureActionType.EDIT_LECTURE,
    payload: payload,
  };
};

export const editLectureThunk = (lecture) => {
  return async (dispatch) => {
    try {
      //console.log("EDITLECTURETHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/${lecture.id}`,
        lecture
      );
      //console.log("EDITLECTURETHUNK COMPLETED");
      dispatch(editLecture(response.data));
      //console.log("Edit Lecture Data: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };
};
