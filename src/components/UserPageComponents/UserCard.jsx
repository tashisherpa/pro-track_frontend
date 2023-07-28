import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  const dispatch = useDispatch();
  const img_link =
    "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";

  const handleDelete = () => {
    dispatch(deleteUserThunk(user.id));
  };

  return (
    <div className="bg-gray-700 justify-center flex hover:scale-110 ">
      <div className="max-w-xs rounded w-36  h-50 bg-white  shadow-lg mt-4 mr-4">
        <Link to={`./${user.id}`}>
          <img
            className="w-24 h-24 rounded-full"
            src={img_link}
            alt="user_img"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-lg text-center mb-2">
              {user.firstName} {user.lastName}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;

