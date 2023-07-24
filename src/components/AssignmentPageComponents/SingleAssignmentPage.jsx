import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditAssignment from "./EditAssignment";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";

function SingleAssignmentPage({ assignment }) {
 

  const dispatch = useDispatch();

  console.log("single assignment: ", assignment);

  const handleDelete = () => {
    dispatch(deleteUserThunk(assignment.id));
  };
  return (
    <div className="flex max-w-4xl rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <Link to={`./${assignment.id}`}>
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl text-left mb-2">
            {assignment.assignmentName} 
          </div>
          <div className="text-lg text-left mb-2">
            Instructionn: {assignment.instruction}
          </div>
          <div className="text-lg text-left mb-2">
            Grou: {assignment.group}
          </div>
          <div className="text-lg text-left mb-2">
             Due: {assignment.due_date}
          </div>
        </div>
        <div>
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
      </Link>
    </div>
  );
}

export default SingleAssignmentPage;
