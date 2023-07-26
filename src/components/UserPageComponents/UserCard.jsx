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
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg mt-8 mr-8">
        <Link to={`./${user.id}`}>
          <img className="w-full object-fill" src={img_link} alt="user_img" />
          <div className="px-6 py-4">
            <div className="font-bold text-lg text-center mb-2">
              {user.firstName} {user.lastName}
            </div>
          </div>
        </Link>
        <div>
          <Link to={`/users/editUser/${user.id}`}>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Edit
            </button>
          </Link>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
