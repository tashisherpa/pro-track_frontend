import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../redux/users/users.action";

function SingleUserCard({ user }) {
  const img_link =
    "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";

  const dispatch = useDispatch();

  console.log("single user: ", user);

  const handleDelete = () => {
    dispatch(deleteUserThunk(user.id));
  };
  return (
    <div className="h-screen">
      <div className="max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl ">
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <img
              className="w-24 h-24 rounded-full"
              src={img_link}
              alt="Rounded avatar"
            />
            <div className="font-medium text-black">
              <div className="font-bold text-2xl mb-2">
                {user.firstName} {user.lastName}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-lg text-left mb-2">User Type: {user.userType}</div>
            <div className="text-lg text-left mb-2">Email: {user.email}</div>
            <div className="text-lg text-left mb-2">
              Cohort Year: {user.cohort_year}
            </div>
            <div>
              <Link to={`/users/editUser/${user.id}`}>
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                  Edit
                </button>
              </Link>
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                onClick={handleDelete}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserCard;
/*
 <div className="max-w-xs rounded w-40  h-50 bg-white  shadow-lg mt-4 mr-4">
      <div className="flex justify-center mt-4">
      <img className="w-24 h-24 rounded-full " src={img_link} alt="user_img" />
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          
          <div className="text-lg text-left mb-2">
            {user.userType}
          </div>
          <div className="text-lg text-left mb-2">
            Email: {user.email}
          </div>
          <div className="text-lg text-left mb-2">
            Cohort Year: {user.cohort_year}
          </div>
        </div>
        <div>
          <Link to={`/users/editUser/${user.id}`}>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
              Edit
            </button>
          </Link>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div></div>
      </div></div>

*/
