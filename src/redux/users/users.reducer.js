import UserActionType from "./users.types";

//define the initial state for all users array and single user object
export const INITIAL_USER_STATE = {
  allUsers: [],
  singleUser: {},
  authUser:{},
};

//handle the action type
const users = (state = INITIAL_USER_STATE, action) => {
  //console.log("USERREDUCER IS HANDLING FETCH ALL USER ACTION");
  switch (action.type) {
    case UserActionType.FETCH_ALL_USERS:
      return { ...state, allUsers: action.payload };
    case UserActionType.FETCH_SINGLE_USER:
      return {
        ...state,
        singleUser: action.payload,
      };
    case UserActionType.AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case UserActionType.DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user.id !== action.payload),
      };
    case UserActionType.EDIT_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        singleUser: action.payload,
      };
    case UserActionType.ADD_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    default:
      return state;
  }
};

export default users;
