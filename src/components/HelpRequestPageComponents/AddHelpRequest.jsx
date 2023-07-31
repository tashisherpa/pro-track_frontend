import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHelpRequestThunk } from "../../redux/helprequest/helprequest.action";
import { useDispatch, useSelector } from "react-redux";

function AddHelpRequest() {
  const [form, setForm] = useState({});
  const loggedInUser = useSelector((state) => state.users.authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");
    dispatch(addHelpRequestThunk({ ...form, studentId: loggedInUser.id })).then(
      () => {
        navigate(`/helprequests`);
      }
    );
  };
  //returns user to lectures page
  const handleCancel = () => {
    navigate("/helprequests");
  };
  return (
    <div className="flex justify-center m-16">
      <div className="w-full max-w-xs">
      <h1 className="text-gray-800 text-center text-2xl font-bold mb-4">Add Help Request</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
            type="text"
            placeholder="Request"
            name="request"
            onChange={handleInputChange}
          />
          <div className="flex justify-evenly">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Add Request
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleCancel}
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddHelpRequest;
