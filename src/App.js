import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import SideNavBar from "./components/SideNavBar";
import { Home } from "./pages";
import PrivateRoute from "./Utils/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login name="login" displayName="Log In" />}
        />
        <Route
          path="/signup"
          element={<Signup name="signup" displayName="Sign Up" />}
        />
       <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
