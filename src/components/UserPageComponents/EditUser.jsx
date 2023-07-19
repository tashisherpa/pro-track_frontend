import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchSingleUserThunk,
  editUserThunk,
} from "../../redux/users/users.action";

function EditUser() {
  const user = useSelector((state) => state.users.singleUser);

  //gets current user id from the path 
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editForm, setEditForm] = useState({});

  //sets the editForm state to the single user information object
  useEffect(() => {
    //console.log("EDIT CAMPUS FIRING IN USE EFFECT");
    setEditForm(user);
  }, [user]);

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [id, dispatch]);

  //returns user to users page
  const handleCancel = () => {
    navigate("/users");
  };

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    //console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(editUserThunk(editForm)).then(() => {
      navigate(`/users`);
    });
  };

  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleEditSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            value={editForm.firstName || ""}
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            value={editForm.lastName || ""}
            placeholder="Last Name"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="imageUrl"
            value={editForm.imageUrl || ""}
            placeholder="Profile Picture"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="userType"
            value={editForm.userType || ""}
            placeholder="User Type"
            onChange={handleInputChange}
          />
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Save
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
