import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import EditAssignment from "./EditAssignment";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { useSelector } from "react-redux/es/hooks/useSelector";


function SingleAssignmentCard({ assignment }) {
 

  const dispatch = useDispatch();

  console.log("single assignment: ", assignment);
   const assignmentStatus = useSelector(
    (state) => state.assignmentsStatus.singleAssignmentStatus
  );

  const handleSubmit = () => {
   dispatch()
  };

  const handleDelete = () => {
    dispatch(deleteAssignmentThunk(assignment.id));
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
          <div className="font-bold text-3xl text-left mb-2 flex w-full">
            {assignment.assignmentName} 
            {assignmentStatus[0].status === true ? (
               <p className = "bg-gray-200 dark:bg-gray-700 rounded-full px-10 py-2  text-sm font-semibold text-white mr-2 mb-12 ml-16   ">
                Completed
               </p>

            ) : (
              <p className = "bg-red-500 rounded-full px-10 py-2 text-sm font-semibold text-white mr-2 mb-2 ml-16   ">
                Incomplete
              </p>
            )
            } 
           
          </div>

          <div className="text-lg text-left mb-2">
            Instruction: {assignment.instruction}
          </div>
          <div className="text-lg text-left mb-2">
            Group: {assignment.group}
          </div>
          <div className="text-lg text-left mb-2">
             Due: {assignment.due_date}
          </div>
        </div>

        
        <div className="flex justify-start px-6 pt-4 pb-2">
        
          <a>
          <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16"
          onClick={handleSubmit}> Submit
          </button>
        </a>
       
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
     
    </div>
  );
}

export default SingleAssignmentCard;
