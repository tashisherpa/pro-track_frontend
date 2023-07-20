import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addResourceThunk } from "../../redux/resources/resources.action";
import { fetchAuthUserThunk} from "../../redux/users/users.action";

function AddResourceForm() {
  const user = useSelector((state) => state.users.authUser);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  //returns user to resources page
  const handleCancel = () => {
    navigate("/resources");
  };



  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(addResourceThunk({...form, UserId: user.id})).then(() => {
      navigate(`/resources`);
    });
  };

  console.log("form: ", form);

  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resource Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={form.title || ""}
            placeholder="Title"
            onChange={handleInputChange}
          />
           <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="category"
            value={form.category || ""}
            placeholder="Category"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            value={form.description || ""}
            placeholder="Description"
            onChange={handleInputChange}
          />
          
          <label className="block text-gray-700 text-sm font-bold mb-2">
           Content Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="content"
            value={form.content || ""}
            placeholder="resources Link"
            onChange={handleInputChange}
          />
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Add Resource
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

export default AddResourceForm;