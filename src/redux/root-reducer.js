import { combineReducers } from "redux";
import users from "./users/users.reducer";
import resources from "./resources/resources.reducer";

//use to manage the overall state of the application
//users each manage specific parts of the state
const rootReducer = combineReducers({
  users: users,
  resources: resources,
});

export default rootReducer;
