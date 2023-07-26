import React from "react";

import { Link } from "react-router-dom";

function AddResourceBtn() {
  return (
    <div>
      <Link to={`/resources/add`}>
        <div className="flex justify-end mb-10">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Resource
          </button>
        </div>
      </Link>
    </div>
  );
}

export default AddResourceBtn;
