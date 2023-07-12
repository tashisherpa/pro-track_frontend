import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import LoginNavbar from "./components/LoginNavbar";

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
        
      </Routes>
    </Router>
  );
}

export default App;
