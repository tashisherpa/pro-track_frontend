import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignmentThunk } from "../../redux/assignment/assignments.action";

function AddAssignment() {
  const user = useSelector((state) => state.users.authUser);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //returns user to resources page
  const handleCancel = () => {
    navigate("/assignments");
  };

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(addAssignmentThunk({ ...form })).then(() => {
      navigate(`/assignments`);
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
            Assignment Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="assignmentName"
            value={form.assignmentName || ""}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instruction
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="instruction"
            value={form.instruction || ""}
            placeholder="instruction..."
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Group
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="boolean"
            name="group"
            value={form.group || ""}
            placeholder="group..."
            onChange={handleInputChange}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            AssignmentDate
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="assignment_date"
            value={form.assignment_date || ""}
            onChange={handleInputChange}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            due Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="due_date"
            value={form.due_date || ""}
            onChange={handleInputChange}
          />
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Add Assignment
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

export default AddAssignment;
