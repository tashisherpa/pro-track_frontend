import React from "react";
import { useNavigate } from "react-router-dom";
import logowhite from "../../images/logowhite.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogo = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 fixed flex top-0 left-0 w-full p-4">
      {/* Logo on the left */}
      <div className="text-xl font-bold">
        <img
          onClick={handleLogo}
          src={logowhite}
          alt="logo"
          className="h-15 w-20"
        />
      </div>

      {/* Navigation links and buttons on the right */}
      <div className="flex right-0 ml-auto items-center space-x-4">
        <button
          onClick={handleSignup}
          className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1"
        >
          Sign Up
        </button>
        <button
          onClick={handleLogin}
          className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 right-0 text-sm font-semibold text-white mr-1"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
