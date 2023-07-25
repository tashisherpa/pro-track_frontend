import { combineReducers } from "redux";
import users from "./users/users.reducer";
import resources from "./resources/resources.reducer";
import lectures from "./lectures/lectures.reducer";
import helpRequests from "./helprequest/helprequest.reducer";
import assignments from "./assignment/assignments.reducer";
import feed from "./feed/feed.reducer";
import assignmentsStatus from "./assignmentStatus/assignmentStatus.reducer";
import zoom from "./zoom/zoom.reducer";
<<<<<<< HEAD
import socket from "./socket/socket.reducer";
=======

>>>>>>> faf1b389c725d86fee8cce0a5bfb35050d6d8b37
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
<<<<<<< HEAD
  socket: socket,
=======
>>>>>>> faf1b389c725d86fee8cce0a5bfb35050d6d8b37
});

export default rootReducer;
