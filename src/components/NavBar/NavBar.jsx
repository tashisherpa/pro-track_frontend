import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      {/* Logo on the left */}
      <div className="text-xl font-bold">My Logo</div>

      {/* Navigation links and buttons on the right */}
      <div className="flex">
        <button className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">Login</button>
        <button className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">Sign Up</button>
     
    </div>
    </nav>
  );
};

export default Navbar;