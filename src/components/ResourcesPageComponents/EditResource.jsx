import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchSingleResourceThunk,
  editResourceThunk,
} from "../../redux/resources/resources.action";

function EditResource() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resource = useSelector((state) => state.resources.singleResource);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    setEditForm(resource);
  }, [resource]);

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  };

  useEffect(() => {
    const fetchSingleResource = () => {
      return dispatch(fetchSingleResourceThunk(id));
    };
    fetchSingleResource();
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(editResourceThunk(editForm)).then(() => {
      navigate(`/resources`);
    });
  };

  const handleCancel = () => {
    navigate("/resources");
  };

  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="category"
            value={editForm.category || ""}
            placeholder="category"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            resource Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="link"
            value={editForm.link || ""}
            placeholder="link"
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

export default EditResource;
