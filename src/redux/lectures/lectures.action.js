import axios from "axios";
import LectureActionType from "./lectures.types";

export const fetchAllLectures = (payload) => {
  return {
    type: LectureActionType.FETCH_ALL_LECTURES,
    payload: payload,
  };
};

export const fetchAllLecturesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/all`
      );
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
      dispatch(fetchSingleLecture(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteLecture = (payload) => {
  return {
    type: LectureActionType.DELETE_LECTURE,
    payload: payload,
  };
};

export const deleteLectureThunk = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/${id}`
      );
      dispatch(deleteLecture(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addLecture = (payload) => {
  return {
    type: LectureActionType.ADD_LECTURE,
    payload: payload,
  };
};

export const addLectureThunk = (newLecture) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/`,
        newLecture
      );
      dispatch(addLecture(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editLecture = (payload) => {
  return {
    type: LectureActionType.EDIT_LECTURE,
    payload: payload,
  };
};

export const editLectureThunk = (lecture) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/lecture/${lecture.id}`,
        lecture
      );
      dispatch(editLecture(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
