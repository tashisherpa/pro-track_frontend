// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllUsersThunk } from "../../redux/users/users.action";
import { addAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";

function GenerateSoloAssignments( assignment, students ) {
  // const users = useSelector((state) => state.users.allUsers);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchAllUsers = () => {
  //     return dispatch(fetchAllUsersThunk());
  //   };
  //   fetchAllUsers();
  // }, [dispatch]);

  // const addAssignStat = (student) => {
  //   dispatch(addAssignmentStatusThunk({
  //       userId: student.id,
  //       assignmentId: assignment.id,
  //       status: false,
  //       submission: null,
  //       submissionDate: null,
  //       feedback: null,
  //     }))
  // }

  // const students = users.filter((user) => user.userType === "student");
  // console.log(students);
  return (
    <div>
      {/* {students.map((student) => {
          addAssignStat(student);
      })} */}
    </div>
  );
}

export default GenerateSoloAssignments;
