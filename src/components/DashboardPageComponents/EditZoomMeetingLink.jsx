import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  editZoomMeetingLinkThunk,
  fetchZoomMeetingLinkThunk,
} from "../../redux/zoom/zoom.action";

function EditZoomMeetingLink() {
  const zoomMeetingLink = useSelector((state) => state.zoom.zoomMeetingLink);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const fetchZoomMeetingLink = () => {
      return dispatch(fetchZoomMeetingLinkThunk());
    };
    fetchZoomMeetingLink();
  }, [dispatch]);

  useEffect(() => {
    //console.log("EDIT CAMPUS FIRING IN USE EFFECT");
    setEditForm(zoomMeetingLink);
  }, [zoomMeetingLink]);

  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editZoomMeetingLinkThunk(editForm)).then(() => {
      navigate("/dashboard");
    });
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center m-16">
      <div className="w-full max-w-4xl">
        <h1 className="text-gray-800 text-center text-2xl font-bold mb-4">Edit Zoom Link</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            New Zoom Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
            type="text"
            name="link"
            value={editForm.link || ""}
            placeholder="New Link"
            onChange={handleInputChange}
          />
          <div className="flex justify-evenly">
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditZoomMeetingLink;
