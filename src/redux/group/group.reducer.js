import GroupActionType from "./group.types";

export const INITIAL_GROUP_STATE = {
  assignmentGroups: [],
};

const group = (state = INITIAL_GROUP_STATE, action) => {
  switch (action.type) {
    case GroupActionType.FETCH_ASSIGNMENT_GROUPS:
      return { assignmentGroups: action.payload };
    case GroupActionType.ADD_GROUP:
      return {
        assignmentGroups: [...state.assignmentGroups, action.payload.groups],
      };
    case GroupActionType.REMOVE_GROUP_MEMBER:
      return {
        assignmentGroups: state.assignmentGroups.filter(
          (group) => group.userId !== action.payload.userid && group.assignmentStatusId !== action.payload.assignmentstatusid
        ),
      };
    default:
      return state;
  }
};

export default group;
