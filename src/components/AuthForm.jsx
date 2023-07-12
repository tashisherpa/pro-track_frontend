import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
// import { auth } from "../redux/store";
// import { useNavigate } from "react-router-dom";

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.user.error);

//     const handleSubmit = (evt) => {
//      evt.preventDefault();
//      const formName = name;
//      const email = evt.target.email.value;
//      const password = evt.target.password.value;
//      dispatch(auth(email, password, formName));

//     navigate("/home");
//   };

  return (
    <div>
        <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
            </div>
        </form>
        </div>
      {/* <form name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
      </form> */}
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