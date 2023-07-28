import React, {useEffect} from "react";
import SingleAssignmentCard from "../components/AssignmentPageComponents/SingleAssignmentCard";
import AdminSingleAssignmentCard from "../components/AssignmentPageComponents/AdminSingleAssignmentCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import { fetchSingleAssignmentThunk } from "../redux/assignment/assignments.action";

function SingleAssignment() {
  const assignment= useSelector((state) => state.assignments.singleAssignment);
  const user = useSelector((state) => state.users.authUser);
  console.log("user check: ", user);

  //gets current user id from the path
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("id ", id);

  useEffect(() => {
      dispatch(fetchSingleAssignmentThunk(id));
  }, [dispatch, id]);

  console.log("assignment: ", assignment);


  return (
    <div className= "text-white bg-gray-700 h-screen">
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        {
          user.userType==="admin"?(<div>
            <AdminSingleAssignmentCard key={assignment.id} assignment={assignment}/>
            </div>):(<div>
            <SingleAssignmentCard key={assignment.id} assignment={assignment}/>
            </div>)
        }
      </div>
    </div>
  );
}

export default SingleAssignment;