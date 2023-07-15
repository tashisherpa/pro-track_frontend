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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login name="login" displayName="Log In" />} />
        <Route
          path="/signup"
          element={<Signup name="signup" displayName="Sign Up" />}
        />
        {/*Protected Route:
            - has all the routes that shouldn't be access by someone who isn't a user/logged in
        */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} /> {/**tashi */}
          <Route path="/resources" element={<Resources />} />
          {/**Sabina */}
          <Route path="/lectures" element={<Lectures />} />
          {/**Sabina */}
          <Route path="/assignments" element={<Assignments />} />
          {/**tashi */}
          <Route path="/helprequests" element={<HelpRequests />} />
          {/**tashi */}
          <Route path="/helprequests/addRequest" element={<AddHelpRequest />} />
          <Route path="/users" element={<Users />} /> {/**WIP */}
          <Route path="/profile" element={<Profile />} />
          {/**Sabina */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
