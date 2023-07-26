import React, { useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
// import AddAssignment from "../components/AssignmentPageComponents";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssignmentsThunk } from "../redux/assignment/assignments.action";
import { fetchAllAssignmentsStatusThunk } from "../redux/assignmentStatus/assignmentStatus.action";
import AssignmentCard from "../components/AssignmentPageComponents/AssignmentCard";
import AddAssignmentBtn from "../components/AssignmentPageComponents/AddAssignmentBtn";

function Assignments() {
  const dispatch = useDispatch();
  const allAssignments = useSelector(
    (state) => state.assignments.allAssignments
  );

  useEffect(() => {
    dispatch(fetchAllAssignmentsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllAssignmentsStatusThunk());
  }, [dispatch]);

  const userAssignmnets = allAssignments.filter((assign) => assign.email);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        <AddAssignmentBtn />
        <div className="flex flex-wrap">
          {allAssignments.length > 0 ? (
            allAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No Assignments</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
