import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {editAssignmentThunk} from "../../redux/assignment/assignments.action";
import {editAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";

function SingleAssignmentCard({ assignment }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();
  console.log("single assignment: ", assignment);
  const assignmentStatus = useSelector(
    (state) => state.assignmentsStatus.singleAssignmentStatus
  );

  const handleDelete = () => {
    dispatch(deleteAssignmentThunk(assignment.id));
  };
  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };
 
  const handleSubmit = (event) => {
    // event.preventDefault();
    // //console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    // dispatch(editAssignmentThunk(editForm)).then(() => {
    //   navigate(`/assignmentsStatus/${assignmentStatus.id}`);
    // });
// idk abt this?
    event.preventDefault();
   
    dispatch(
      editAssignmentStatusThunk({ ...editForm, submission: assignmentStatus.submission })
    ).then(() => {
      navigate("/assignments");
    });
  };

  useEffect(() => {
    const fetchSingleAssignmentStatus = () => {
      return dispatch(fetchSingleAssignmentsStatusThunk(assignment.id));
    };
    fetchSingleAssignmentStatus();
  }, [dispatch]);

  return (
    <div className="flex max-w-4xl rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl text-left mb-2">
            {assignment.assignmentName}
            {assignmentStatus[0].status === true ? (
           
               <p className = "bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12 ml-16   ">
                Completed
               </p>
            )
            : (
              <p className = "bg-red-200 dark:bg-gray-700 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12 ml-16   ">
                Incomplete
                </p>
            )}

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
          <form onSubmit = {handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Github Repository Link
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="submission"
            value={editForm.submission || ""}
            onChange = {handleChange}
            placeholder="GitHub Repo Link"
          />
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" type="submit">
            Submit
          </button>
          </form>
          <Link to={`/assignments/edit/${assignment.id}`}>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
              Edit
            </button>
          </Link>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleAssignmentCard;
