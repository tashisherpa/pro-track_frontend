import React from "react";
import { useState } from "react";

function AddLectureBtn() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div>
      {
        /*Only visible to TA/Admins */
        isAdmin ? (
          <div className="flex justify-end mb-10">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Lecture
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default AddLectureBtn;
