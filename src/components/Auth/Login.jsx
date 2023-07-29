import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { loginAuth } from "../../redux/users/users.action";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import useAuth from "../../hooks/useAuth";
import NavBar from "../NavBar/NavBar";


/**
 * COMPONENT
 */
const Login = ({ name, displayName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.users.authUser);

  useEffect(() => {
    if (user.id !== undefined) {
      console.log(location.pathname);
      if (location.pathname === "/login") navigate("/dashboard");
      dispatch(fetchAuthUserThunk());
    } else {
      dispatch(fetchAuthUserThunk());
    }
  }, [user, dispatch]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    //console.log("email: ", email);
    const password = evt.target.password.value;
    dispatch(loginAuth(email, password));
  };

  return (
    <div >
      <NavBar />
      <div className="flex bg-gray-800 text-white flex-col h-screen items-center justify-center">
        
       
        <div className="w-full hover:scale-110 max-w-xs"> 
        <h1 className = "justify-center flex text-bold">{name}</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            name={name}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-center space-x-10">
              <button
                className="bg-blue-500 hover:scale-110 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {displayName}
              </button>
              {/* <Link
                to="/signup"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </Link> */}
              {/* <a
                className="button google"
                href="http://localhost:8080/auth/google/"
              >
                Sign in with Google
              </a> */}
              <button
                className="middle hover:scale-110 none center mr-4 rounded-lg text-black bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/google/`}>
                  Sign in with Google
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * PROP TYPES
 */
Login.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default Login;
