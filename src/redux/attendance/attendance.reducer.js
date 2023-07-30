import AttendanceActionType from "./attendance.types";

export const INITIAL_ATTENDANCE_STATE = {
  attendances: [],
  userAttendance: {},
};

const attendance = (state = INITIAL_ATTENDANCE_STATE, action) => {
  //console.log("FEEDREDUCER IS HANDLING FETCH ALL FEED ACTION");
  switch (action.type) {
    case AttendanceActionType.FETCH_ATTENDANCE:
      return { ...state, attendances: action.payload };
    case AttendanceActionType.FETCH_USER_ATTENDANCE:
      return {
        ...state,
        userAttendance: action.payload,
      };
    case AttendanceActionType.ADD_ATTENDANCE:
      return {
        ...state,
        attendances: [...state.attendances, action.payload],
      };
    case AttendanceActionType.EDIT_ATTENDANCE:
      return {
        ...state,
        attendances: state.attendances.map((attendance) =>
          attendance.id === action.payload.id ? action.payload : attendance
        ),
        userAttendance: action.payload,
      };
    case AttendanceActionType.CLEAR_ATTENDANCE:
      return {
        ...state,
        attendances: [],
      };
    default:
      return state;
  }
};

export default attendance;
