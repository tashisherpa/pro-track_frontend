import React, {useEffect} from "react";
import SingleAssignmentPage from "../components/AssignmentPageComponents/SingleAssignmentPage";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import { fetchSingleAssignmentThunk } from "../redux/assignment/assignments.action";

function SingleUser() {
  const user = useSelector((state) => state.assignments.singleAssignment);

  //gets current user id from the path
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("id ", id);

  useEffect(() => {
    const fetchSingleAssignment = () =>{
        return dispatch(fetchSingleAssignmentThunk(id));
    }
    fetchSingleAssignment();
  }, [dispatch]);

  console.log("assignment: ", assignment);


  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <SingleAssignmentPage key={assignment.id} assignment={assignment}/>
      </div>
    </div>
  );
}

export default SingleUser;