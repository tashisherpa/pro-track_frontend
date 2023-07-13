import React from "react";

function PostAnnouncement() {
  return (
    <div>
    <h1>Dashboard</h1>
      <form className="flex flex-col">
        <input
          className="shadow appearance-none border rounded w-full py-10 px-3 rounded-45 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value=""
          placeholder="What are we posting"
        />
        <button className="flex justify-end w-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center" type="Submit">Post</button>
      </form>
    </div>
  );
}

export default PostAnnouncement;
