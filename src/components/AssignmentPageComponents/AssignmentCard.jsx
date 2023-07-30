import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { parseISO, format } from "date-fns";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";

import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";

function AssignmentCard({ assignment }) {
  //const [isAdmin, setIsAdmin] = useState(true);
  const maxInstructionLength = 100;
  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  const handleDelete = (event) => {
    event.preventDefault();

    dispatch(deleteAssignmentThunk(assignment.id));
  };

  console.log("assignment passed in: ", assignment);

  return (
    <div className="max-w-md w-80 rounded-lg bg-white overflow-hidden shadow-xl mt-4 mr-8 bottom-0">
      <Link to={`./${assignment.id}`}>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2">
            {assignment.assignmentName}
          </div>

          <p className="text-gray-600 mt-2">
            {assignment.instruction.length > maxInstructionLength
              ? `${assignment.instruction.substring(
                  0,
                  maxInstructionLength
                )}...`
              : assignment.instruction}
          </p>
          <br />
          <p className="text-gray-500 text-xs">
            {assignment.group ? "Group Project" : "Solo Project"}
          </p>
          <br />
          <p className="text-gray-500 text-xs">
            Assigned Date:{" "}
            {format(parseISO(assignment.assignment_date), "MM-dd-yyyy")}
          </p>
          <p className="text-gray-500 text-xs">
            Due Date: {format(parseISO(assignment.due_date), "MM-dd-yyyy")}
          </p>
          <br />
        </div>
        
      </Link>
    </div>
  );
}

export default AssignmentCard;
