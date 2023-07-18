import { combineReducers } from "redux";
import users from "./users/users.reducer";
import resources from "./resources/resources.reducer";
import lectures from "./lectures/lectures.reducer";
import helpRequests from "./helprequest/helprequest.reducer";

//use to manage the overall state of the application
//users each manage specific parts of the state
const rootReducer = combineReducers({
  users: users,
  resources: resources,
  lectures: lectures,
  helpRequests: helpRequests,
});

export default rootReducer;
