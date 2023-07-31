import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleAssignmentThunk,
  editAssignmentThunk,
} from "../../redux/assignment/assignments.action";

function EditAssignment() {
  const { id } = useParams();
  const assignment = useSelector((state) => state.assignments.singleAssignment);
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleAssignment = () => {
      return dispatch(fetchSingleAssignmentThunk(id));
    };
    fetchSingleAssignment();
  }, [dispatch]);

  useEffect(() => {
    setEditForm(assignment);
  }, [assignment]);

  const handleCancel = () => {
    navigate("/assignments");
  };

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editAssignmentThunk(editForm)).then(() => {
      navigate(`/assignments`);
    });
  };

  return (
    <div className="bg-gray-700 px-10 flex items-center justify-center h-screen">
      <div className="w-4/5 max-w-screen-lg px-8 pt-10 pb-8 mb-4 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-gray-800 text-center text-2xl font-bold mb-4">
          Edit Assignment
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Assignment Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            name="assignmentName"
            value={editForm.assignmentName || ""}
            placeholder="name"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instruction
          </label>
          <textarea
            className="shadow appearance-none  h-48 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            name="instrution"
            value={editForm.instruction || ""}
            placeholder="Instruction"
            onChange={handleInputChange}
          ></textarea>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="date"
            name="assignment_date"
            value={editForm.assignment_date || ""}
            placeholder="assignment date"
            onChange={handleInputChange}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            due_date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
            type="date"
            name="due_date"
            value={editForm.due_date || ""}
            placeholder="due Date"
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

export default EditAssignment;
