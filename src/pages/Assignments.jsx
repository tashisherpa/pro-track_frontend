import React, { useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
// import AddAssignment from "../components/AssignmentPageComponents";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssignmentsThunk } from "../redux/assignment/assignments.action";
import { fetchAllAssignmentsStatusThunk } from "../redux/assignmentStatus/assignmentStatus.action";
import {
  AddAssignmentBtn,
  AssignmentCard,
} from "../components/AssignmentPageComponents";

function Assignments() {
  const dispatch = useDispatch();
  const allAssignments = useSelector(
    (state) => state.assignments.allAssignments
  );
  const user = useSelector((state) => state.users.authUser);
  const allAssignmentStatus = useSelector(
    (state) => state.assignmentsStatus.allAssignmentsStatus
  );

  useEffect(() => {
    dispatch(fetchAllAssignmentsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllAssignmentsStatusThunk());
  }, [dispatch]);

  console.log(allAssignmentStatus);

  const userAssignments = allAssignmentStatus.filter(
    (assign) => assign.userId === user.id
  );
  console.log("users assigns: ", userAssignments);

  return (
    <div className ="bg-gray-700 ">
    <div className ="h-screen ">
      <SideNavBar />
      <div className="p-4 bg-gray-700 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4 text-white border-b-2 border-white">Assignments</h1>
        {user.userType === "admin" ? (
          <div>
            <AddAssignmentBtn />
            <div className="flex  flex-wrap">
              {allAssignments.length > 0 ? (
                allAssignments.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))
              ) : (
                <p style={{ textAlign: "center"  }}>No Assignments</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap">
              {userAssignments.length > 0 ? (
                userAssignments.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    assignment={assignment.assignment}
                  />
                ))
              ) : (
                <p style={{ textAlign: "center" }}>No Assignments</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div></div>
  );
}

export default Assignments;
