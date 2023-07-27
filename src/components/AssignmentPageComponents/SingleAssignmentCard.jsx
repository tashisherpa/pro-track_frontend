import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editAssignmentThunk } from "../../redux/assignment/assignments.action";
import { editAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";

function SingleAssignmentCard({ assignment }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const assignmentStatus = useSelector(
    (state) => state.assignmentsStatus.singleAssignmentStatus
  );

  useEffect(() => {
    const fetchSingleAssignmentStatus = () => {
      return dispatch(fetchSingleAssignmentsStatusThunk(id));
    };
    fetchSingleAssignmentStatus();
  }, [dispatch]);

  useEffect(() => {
    setEditForm(assignmentStatus);
  }, [assignmentStatus]);

  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      editAssignmentStatusThunk({...editForm, status:!assignmentStatus.status})
    ).then(() => {
      navigate(`/assignments/${assignment.id}`);
    });
  };

  console.log("assigId: ", assignment.id)

  console.log("assignmentStatus edit form: ", editForm);

  return (
    <div className="max-w-4xl rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          <div className="flex justify-between w-full font-bold text-3xl text-left mb-2">
            {assignment.assignmentName}
            <div>
              {assignmentStatus.status === true ? (
                <span className="bg-green-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                  Completed
                </span>
              ) : (
                <span className="bg-red-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                  Incomplete
                </span>
              )}
            </div>
          </div>
          <div className="text-lg text-left mb-2">
            Due: {assignment.due_date}
          </div>
          <div className="text-lg text-left mb-2">
            Instruction: {assignment.instruction}
          </div>
          <div className="text-lg text-left mb-2">
            Group: {assignment.group}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Github Repository Link
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="submission"
              value={editForm.submission || ""}
              onChange={handleChange}
              placeholder="GitHub Repo Link"
            />
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
              type="submit"
            >
              {
                assignmentStatus.status?("Resubmit"):("Submit")
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleAssignmentCard;
