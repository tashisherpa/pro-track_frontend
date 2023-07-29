import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { signupAuth } from "../../redux/users/users.action";
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar";

const Signup = ({ name, displayName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(signupAuth(firstName, lastName, email, password));
    navigate("/login");
  };

  return (
    <div >
      <NavBar />
      <div className="flex flex-col bg-gray-800 text-white h-screen items-center justify-center">
        
        <div className="w-full hover:scale-110 justify-center max-w-xs">
          <h1 className = "justify-center flex text-bold  ">{name}</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            name={name}
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <div className=" flex mb-4">
                <input
                  className="shadow mr-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
              />
            </div>

            <div className="flex items-center justify-center space-x-10">
              {/* <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </Link> */}
              <button
                className="bg-blue-500 hover:scale-110 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
Signup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default Signup;
