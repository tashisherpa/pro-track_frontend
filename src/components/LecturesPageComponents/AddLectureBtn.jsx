import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function AddLectureBtn() {
  const user = useSelector((state) => state.users.authUser);

  return (
    <div>
      {
        /*Only visible to TA/Admins */
        user.userType === "admin" ? (
          <Link to={`/lectures/add`}>
            <div className="flex justify-end mb-10">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Lecture
              </button>
            </div>
          </Link>
        ) : null
      }
    </div>
  );
}

export default AddLectureBtn;
