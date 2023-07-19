import LectureActionType from "./lectures.types";

//define the initial state for all lectures array and single lecture object
export const INITIAL_LECTURE_STATE = {
  allLectures: [],
  singleLectures: {},
};

//handle the action type
const lectures = (state = INITIAL_LECTURE_STATE, action) => {
  //console.log("LECTURESREDUCER IS HANDLING FETCH ALL LECTURES ACTION");
  switch (action.type) {
    case LectureActionType.FETCH_ALL_LECTURES:
      return { ...state, allLectures: action.payload };
    case LectureActionType.DELETE_LECTURE:
      return {
        ...state,
        allLectures: state.allLectures.filter(
          (lecture) => lecture.id !== action.payload
        ),
      };
    case LectureActionType.EDIT_LECTURE:
      return {
        ...state,
        allLectures: state.allLectures.map((lecture) =>
          lecture.id === action.payload.id ? action.payload : lecture
        ),
        singleLecture: action.payload,
      };
    case LectureActionType.ADD_LECTURE:
      return {
        ...state,
        allLectures: [...state.allLectures, action.payload],
      };
    default:
      return state;
  }
};

export default lectures;
