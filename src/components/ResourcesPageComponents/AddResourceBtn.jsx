import React from "react";
import { useState } from "react";

function AddResourceBtn() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div>
      {
        /*Only visible to TA/Admins */
        isAdmin ? (
          <div className="flex justify-end mb-10">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Resource
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default AddResourceBtn;
