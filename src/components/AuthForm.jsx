import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../redux/users/users.action";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

      const handleSubmit = (evt) => {
       evt.preventDefault();
       const formName = name;
       const email = evt.target.email.value;
       const password = evt.target.password.value;
       dispatch(auth(email, password, formName));

      navigate("/home");
    };

  return (
    <div>
      <LoginNavbar />
      <div className="flex flex-col h-screen items-center justify-center">
        <h1>{name}</h1>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onSubmit={handleSubmit}
              >
                {displayName}
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
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export const Login = AuthForm;
export const Signup = AuthForm;
