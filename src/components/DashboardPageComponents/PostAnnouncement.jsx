import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFeedThunk } from "../../redux/feed/feed.action";
import { fetchSingleUserThunk } from "../../redux/users/users.action";

function PostAnnouncement({ user }) {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFeedThunk({ ...form, userId: user.id })).then(() => {
      setForm({});
    });
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          value={form.title || ""}
          placeholder="Post Title"
          onChange={handleInputChange}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Post
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-10 px-3 rounded-45 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          value={form.content || ""}
          placeholder="What are we posting!"
          onChange={handleInputChange}
        />
        <button
          className="flex justify-end w-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center m-2"
          type="Submit"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostAnnouncement;
