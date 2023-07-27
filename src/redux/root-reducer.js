import { combineReducers } from "redux";
import users from "./users/users.reducer";
import resources from "./resources/resources.reducer";
import lectures from "./lectures/lectures.reducer";
import helpRequests from "./helprequest/helprequest.reducer";
import assignments from "./assignment/assignments.reducer";
import feed from "./feed/feed.reducer";
import assignmentsStatus from "./assignmentStatus/assignmentStatus.reducer";
import zoom from "./zoom/zoom.reducer";
import socket from "./socket/socket.reducer";
import group from "./group/group.reducer";
//use to manage the overall state of the application
//users each manage specific parts of the state
const rootReducer = combineReducers({
  users: users,
  resources: resources,
  lectures: lectures,
  helpRequests: helpRequests,
  assignments: assignments,
  feed: feed,
  assignmentsStatus: assignmentsStatus,
  zoom: zoom,
  socket: socket,
  group: group,
});

export default rootReducer;
