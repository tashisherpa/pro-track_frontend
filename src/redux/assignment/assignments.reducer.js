import AssignmentActionType from "./assignments.types";

//define the initial state for all users array and single user object
export const INITIAL_ASSIGNMENT_STATE = {
  allAssignments: [],
  singleAssignment: {},
};

//handle the action type
const assignments = (state = INITIAL_ASSIGNMENT_STATE, action) => {
  console.log("USERREDUCER IS HANDLING FETCH ALL USER ACTION");
  switch (action.type) {
    case AssignmentActionType.FETCH_ALL_ASSIGNMENTS:
      return { ...state, allAssignments: action.payload };
    case AssignmentActionType.FETCH_SINGLE_ASSIGNMENT:
      return {
        ...state,
        singleAssignment: action.payload,
      };
    case AssignmentActionType.DELETE_ASSIGNMENT:
      return {
        ...state,
        allAssignments: state.allAssignments.filter(
          (assignments) => assignments.id !== action.payload
        ),
      };
    case AssignmentActionType.EDIT_ASSIGNMENT:
      return {
        ...state,
        allAssignments: state.allAssignments.map((assignments) =>
          assignments.id === action.payload.id ? action.payload : assignments
        ),
        singleAssignment: action.payload,
      };
    case AssignmentActionType.ADD_ASSIGNMENT:
      return {
        ...state,
        allAssignments: [...state.allAssignments, action.payload],
      };
    default:
      return state;
  }
};

export default assignments;
