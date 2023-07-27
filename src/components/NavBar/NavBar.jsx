import React from "react";
import { Signup } from "../Auth";
import { Login } from "../Auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logowhite from "../../images/logowhite.png";


const NavBar = () => {
 const navigate = useNavigate();

   const  handleSignup = () => {
        navigate("/signup");
    }

   const  handleLogin = () => {   
        navigate("/login");
    }
const handleLogo = () => {
    navigate("/");
}

   
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white fixed  w-full p-4">
      {/* Logo on the left */}
      <div className="text-xl font-bold">
        <img onClick = {handleLogo} src={logowhite} alt="logo" className="h-15 w-20" />
      </div>

      {/* Navigation links and buttons on the right */}
      <div className="flex">
    
        <button onClick = {handleSignup} className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">Sign Up</button>
        <button onClick= {handleLogin} className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">Login</button>
     {/* <ul >
     <li>
              <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Login />
              </Link>
              <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Signup />
              </Link>
            </li>
          </ul> */}
    </div>
    </nav>
  );
};

export default NavBar;