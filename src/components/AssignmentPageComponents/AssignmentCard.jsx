import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAuthUserThunk} from "../../redux/users/users.action";
import { Link } from "react-router-dom";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";


function AssignmentCard({assignment}) {
  //const [isAdmin, setIsAdmin] = useState(true);

  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);
  console.log("assignment card : ", assignment);

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(deleteAssignmentThunk(assignment.id)).then(() => {
      console.log("assignment deleted")
      // navigate(`/assignments`);
    });
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mt-8 mr-8">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{assignment.assignmentName}</div>
        
       
        <p className="text-gray-500 text-xs">{assignment.instruction}</p>
        <p className="text-gray-500 text-xs">{assignment.group}</p>
        <p className="text-gray-500 text-xs">{assignment.assignment_date}</p>
        <p className="text-gray-500 text-xs">{assignment.due_date}</p>
        <br></br>
      </div>
      <div className="flex justify-start px-6 pt-4 pb-2">
      
        {
          /*Only visible to TA/Admins */
          user.userType === "admin"  ? (
            <a>
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16"
            onClick={handleDelete}> DELETE
            </button>
          </a>
          ) : null
        }
        {
          /*Only visible to TA/Admins */
          user.userType === "admin" ? (
            <Link to={`/assignments/edit/${assignment.id}`}>
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16">
              Edit
            </button>
            </Link>
          ) : null
        }
      </div>
    </div>
  );
}

export default AssignmentCard;