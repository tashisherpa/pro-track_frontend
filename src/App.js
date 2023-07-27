import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/Auth";
import {
  Assignments,
  Dashboard,
  HelpRequests,
  Resources,
  Lectures,
  Users,
  Profile,
} from "./pages";
import PrivateRoute from "./Utils/Auth";
import AddHelpRequest from "./components/HelpRequestPageComponents/AddHelpRequest";
import EditUser from "./components/UserPageComponents/EditUser";
import AddLectureForm from "./components/LecturesPageComponents/AddLectureForm";
import EditLecture from "./components/LecturesPageComponents/EditLecture";
import SingleUser from "./pages/SingleUser";
import AddResourceForm from "./components/ResourcesPageComponents/AddResourceForm"; 
import EditResource from "./components/ResourcesPageComponents/EditResource"; 
import AddAssignment from "./components/AssignmentPageComponents/AddAssignment"; 
import EditAssignment from "./components/AssignmentPageComponents/EditAssignment";
import SingleAssignment from "./pages/SingleAssignment"; 
import EditHelpRequest from "./components/HelpRequestPageComponents/EditHelpRequest";
import EditZoomMeetingLink from "./components/DashboardPageComponents/EditZoomMeetingLink";
import Homepage from "./pages/Homepage";
import AdminSingleAssignment from "./components/AssignmentPageComponents/AdminSingleAssignmentCard";
import { fetchAuthUserThunk } from "./redux/users/users.action";
import { fetchSocket } from "./redux/socket/socket.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthUserThunk());
    const socket = io("http://localhost:8080", {
      withCredentials: true,
    });
    dispatch(fetchSocket(socket));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage name="homepage" displayName="Homepage" />} />
        <Route path="/login" element={<Login name="login" displayName="Log In" />} />
        <Route
          path="/signup"
          element={<Signup name="signup" displayName="Sign Up" />}
        />
        {/*Protected Route:
            - has all the routes that shouldn't be access by someone who isn't a user/logged in
        */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/**Rahima */}
          <Route path="/dashboard/zoomlink" element={<EditZoomMeetingLink />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/add" element={<AddResourceForm />} />
          <Route path="/resources/edit/:id" element={<EditResource />} />
          {/**Sabina */}
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/lectures/add" element={<AddLectureForm />} />
          <Route path="/lectures/edit/:id" element={<EditLecture />} />
          {/**Rahima */}
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/assignments/add" element={<AddAssignment />} />
          <Route path="/assignments/edit/:id" element={<EditAssignment />} />
          <Route path="/assignments/:id" element={<SingleAssignment />} />
          {/**tashi*/}
          <Route path="/helprequests" element={<HelpRequests />} />
          {/**tashi */}
          <Route path="/helprequests/addrequest" element={<AddHelpRequest />} />
          <Route
            path="/helprequests/editrequest/:id"
            element={<EditHelpRequest />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/editUser/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/profile" element={<Profile />} />
          {/**Sabina */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
