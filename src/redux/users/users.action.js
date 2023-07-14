import axios from "axios";
import UserActionType from "./users.types";

//stores an object with a type of fetch all users and adds users array to the payload
//returns the object with all users info in an array
export const fetchAllUsers = (payload) => {
    console.log("FETCH ALL USERS ACTION");
    return {
      type: UserActionType.FETCH_ALL_USERS,
      payload: payload,
    };
};

//gets all users info array from database in response const
//response const data is dispatched to the fetchAllUsers func
//which stores all users' array from database in obj payload and returns the object
export const fetchAllUsersThunk = () => {
    return async (dispatch) => {
      try {
        console.log("FETCHALLUSERSTHUNK IS FIRING");
        const response = await axios.get(`${process.env.REACT_APP_USERS}`);
        console.log("FETCHALLUSERSTHUNK COMPLETED");
        dispatch(fetchAllUsers(response.data));
      } catch (error) {
        console.error(error);
      }
    };
};

//stores an object with the type single user and adds user's info to the payload
//returns the object with the single user info
export const fetchSingleStudent = (payload) => {
    console.log("FETCH SINGLE USER ACTION");
    return {
      type: UserActionType.FETCH_SINGLE_USER,
      payload: payload,
    };
};

//gets the single user info from database in response const
//and response const data is dispatched to the fetchSingleUser func
//which stores the user's info in the object payload and returns the object
export const fetchSingleUserThunk = (useremail) => {
    return async (dispatch) => {
      try {
        console.log("FETCHSINGLEUSERSTHUNK IS FIRING");
        const response = await axios.get(
          `${process.env.REACT_APP_USERS}${useremail}`
        );
        console.log("FETCHSINGLEUSERSTHUNK COMPLETED");
        dispatch(fetchSingleUser(response.data));
      } catch (error) {
        console.error(error);
      }
    };
};

//stores an object with type delete user and stores info obj of user to be deleted in the payload
//returns the obj with the deleted user's info obj
export const deleteUser = (payload) => {
    console.log("DELETE USER ACTION ACTIVE");
    return {
      type: UserActionType.DELETE_USER,
      payload: payload,
    };
};

//calls delete in backend with appropriate endpoint and dispatches the deleteUser func
//which returns the info of the users to be deleted in the object payload and returns the obj
export const deleteUserThunk = (useremail) => {
    return async (dispatch) => {
      try {
        console.log("FETCHDELETEUSERTHUNK IS FIRING");
        await axios.delete(`${process.env.REACT_APP_USER}${useremail}`);
        console.log("FETECHDELETEUSERTHUNK COMPLETED");
        dispatch(deleteUser(useremail));
      } catch (error) {
        console.error(error);
      }
    };
  };

//stores an object with type add user and stores info obj of user to be added in the payload
//returns the obj with the added user's info obj
export const addUser = (payload) => {
    console.log("ADD USER ACTION ACTIVE");
    return {
      type: UserActionType.ADD_USER,
      payload: payload,
    };
};

//calls post in backend with appropriate endpoint and dispatches the addUser func with the response data
//which returns the info of the user to be added in the object payload and returns the obj
export const addUserThunk = (newUser) => {
    return async (dispatch) => {
      try {
        console.log("ADDUSERTHUNK IS FIRING");
        const response = await axios.post(
          process.env.REACT_APP_USER,
          newUser
        );
        console.log("ADDUSERTHUNK COMPLETED");
        dispatch(addUser(response.data));
      } catch (error) {
        console.error(error);
      }
    };
};

//stores an object with type edit user and stores updated info obj of user to be put in the payload
//returns the obj with the edited user's updated info obj
export const editUser = (payload) => {
    console.log("EDIT USER ACTION ACTIVE");
    return {
      type: UserActionType.EDIT_USER,
      payload: payload,
    };
};

export const editUserThunk = (user) => {
    return async (dispatch) => {
      try {
        console.log("EDITUSERTHUNK IS FIRING");
        const response = await axios.put(
          `${process.env.REACT_APP_USER}${user.email}`,
          user
        );
        console.log("EDITUSERTHUNK COMPLETED");
        dispatch(editUser(response.data));
        console.log("Edit User Data: ", response.data);
      } catch (error) {
        console.error(error);
      }
    };
};