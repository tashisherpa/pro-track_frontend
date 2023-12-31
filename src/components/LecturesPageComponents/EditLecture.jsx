import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleLectureThunk,
  editLectureThunk,
} from "../../redux/lectures/lectures.action";

function EditLecture() {
  const { id } = useParams();
  const lecture = useSelector((state) => state.lectures.singleLecture);
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleLecture = () => {
      return dispatch(fetchSingleLectureThunk(id));
    };
    fetchSingleLecture();
  }, [dispatch, id]);

  useEffect(() => {
    setEditForm(lecture);
  }, [lecture]);

  const handleCancel = () => {
    navigate("/lectures");
  };

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
      taId: null,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editLectureThunk(editForm)).then(() => {
      navigate(`/lectures`);
    });
  };

  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lecture Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={editForm.title || ""}
            placeholder="Title"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            value={editForm.description || ""}
            placeholder="Description"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lecture Slides Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="slides"
            value={editForm.slides || ""}
            placeholder="Slides Link"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lecture Recording Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="recordings"
            value={editForm.recordings || ""}
            placeholder="Recording Link"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lecture Recording Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="password"
            value={editForm.password || ""}
            placeholder="Recording Password"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lecture Day
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="lecture_date"
            value={editForm.lecture_date || ""}
            placeholder="Lecture Day"
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

export default EditLecture;
