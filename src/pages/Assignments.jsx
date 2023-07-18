import React, { useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssignmentsThunk } from "../redux/assignment/assignments.action";
function Assignments() {
  const dispatch = useDispatch();
  const allAssignments = useSelector(
    (state) => state.assignments.allAssignments
  );
  useEffect(() => {
    console.log("FETCH ALL HELP REQUESTS FIRING IN USE EFFECT");

    const fetchAllAssignments = () => {
      console.log("RUNNING DISPATCH FROM FETCHALLHELPREQUEST");
      return dispatch(fetchAllAssignmentsThunk());
    };
    fetchAllAssignments();
  }, [dispatch]);
  console.log("All Assignments", allAssignments);
  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1>Assignments</h1>
      </div>
    </div>
  );
}

export default Assignments;
