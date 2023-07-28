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
    <div className="flex max-w-4xl rounded overflow-hidden shadow-lg bg-white mt-8 mr-8 ">
      <img className="h-full object-fill" src={img_link} alt="user_img" />
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl text-left mb-2">
            {user.firstName} {user.lastName}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default SingleUserCard;
