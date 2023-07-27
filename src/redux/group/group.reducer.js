import GroupActionType from "./group.types";

export const INITIAL_GROUP_STATE = {
  assignmentGroups: [],
};

const group = (state = INITIAL_GROUP_STATE, action) => {
  switch (action.type) {
    case GroupActionType.FETCH_ASSIGNMENT_GROUPS:
      return { ...state, assignmentGroups: action.payload };
    case GroupActionType.ADD_GROUP:
      return {
        ...state,
        assignmentGroups: [...state.assignmentGroups, action.payload],
      };
    case GroupActionType.REMOVE_GROUP_MEMBER:
      return {
        ...state,
        assignmentGroups: state.assignmentGroups.filter(
          (group) => group.userId !== action.payload.userid && group.assignmentStatusId !== action.payload.assignmentstatusid
        ),
      };
    default:
      return state;
  }
};

export default group;
