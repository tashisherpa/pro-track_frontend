import axios from "axios";
import GroupActionType from "./group.types";

export const fetchAssignmentGroups = (payload) => {
  return {
    type: GroupActionType.FETCH_ASSIGNMENT_GROUPS,
    payload: payload,
  };
};

export const fetchAssignmentGroupsThunk = (assignmentId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/group/${assignmentId}`
      );
      dispatch(fetchAssignmentGroups(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addGroup = (payload) => {
  return {
    type: GroupActionType.ADD_GROUP,
    payload: payload,
  };
};

export const addGroupThunk = (newGroup) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/group/`,
        newGroup
      );
      dispatch(addGroup(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteGroup = (userid, assignmentstatusid) => {
  return {
    type: GroupActionType.REMOVE_GROUP_MEMBER,
    payload: { userid, assignmentstatusid },
  };
};

//calls delete in backend with appropriate endpoint and dispatches the deleteUser func
//which returns the info of the users to be deleted in the object payload and returns the obj
export const deleteGroupThunk = (userid, assignmentstatusid) => {
  return async (dispatch) => {
    try {
      //console.log("FETCHDELETEUSERTHUNK IS FIRING");
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, {
        params: { userId: userid, assignmentStatusId: assignmentstatusid },
      });
      //console.log("FETECHDELETEUSERTHUNK COMPLETED");
      dispatch(deleteGroup(userid, assignmentstatusid));
    } catch (error) {
      console.error(error);
    }
  };
};
