import AssignmentsStatusActionType from "./assignmentStatus.types";

export const INITIAL_ASSIGNMENTS_STATUS_STATE = {
  allAssignmentsStatus: [],
  singleAssignmentStatus: {},
  studentAssignmentsStatus: [],
};

//handle the action type
const assignmentsStatus = (state = INITIAL_ASSIGNMENTS_STATUS_STATE, action) => {
  console.log("ASSIGNMENTSSTATUSREDUCER IS HANDLING FETCH ALL ASSIGNMNETSSTATUS ACTION");
  switch (action.type) {
    case AssignmentsStatusActionType.FETCH_ALL_ASSIGNMENTS_STATUS:
      return { ...state, allAssignmentsStatus: action.payload };
    case AssignmentsStatusActionType.FETCH_SINGLE_ASSIGNMENT_STATUS:
      return {
        ...state,
        singleAssignmentStatus: action.payload,
      };
    case AssignmentsStatusActionType.FETCH_STUDENT_ASSIGNMENTS_STATUS:
        return { ...state, studentAssignmentsStatus: action.payload };
    case AssignmentsStatusActionType.EDIT_ASSIGNMENT_STATUS:
      return {
        ...state,
        studentAssignmentsStatus: state.studentAssignmentsStatus.map((assignmentStatus) =>
          assignmentStatus.id === action.payload.id ? action.payload : assignmentStatus
        ),
        singleAssignmentStatus: action.payload,
      };
    case AssignmentsStatusActionType.ADD_ASSIGNMENT_STATUS:
      return {
        ...state,
        allAssignmentsStatus: [...state.allAssignmentsStatus, action.payload],
      };
    default:
      return state;
  }
};

export default assignmentsStatus;