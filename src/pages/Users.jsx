import React, { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsersThunk } from "../redux/users/users.action";
import UserCard from "../components/UserPageComponents/UserCard";
import {
  addStudentToAttendanceThunk,
  fetchAttendanceThunk,
} from "../redux/attendance/attendance.action";
import { useNavigate } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //gets the all users array from users store
  const allUsers = useSelector((state) => state.users.allUsers);
  const allStaff = allUsers.filter((user) => user.userType !== "student");
  const allStudents = allUsers.filter((user) => user.userType === "student");
  const attendance = useSelector((state) => state.attendance.attendances);
  //gets all users with the fetchAllUsers func
  useEffect(() => {
    //dispatches the fetchAllUsersThunk() from users actions which returns
    //object with the action type and payload containing the array of users
    //and sets all user state to the payload from here through the root-reducer

    const fetchAllUsers = () => {
      return dispatch(fetchAllUsersThunk());
    };
    dispatch(fetchAttendanceThunk());
    fetchAllUsers();
  }, [dispatch]);

  const handleAttendance = async () => {
    const addStudentToAttendance = () => {
      //filters through allStudent and if the userId doesnt exist in the attendance table,
      //it adds it to the studentsToAdd
      const studentsToAdd = allStudents.filter((student) => {
        return !attendance.some(
          (attendence) => attendence.userId === student.id
        );
      });
      studentsToAdd.map((student) => {
        return dispatch(addStudentToAttendanceThunk({ userId: student.id }));
      });
    };
    await addStudentToAttendance();
    navigate("./attendance");
  };

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleAttendance}
        >
          Show Attendance
        </button>

        {/* <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Update Attendance
        </button> */}

        <h1 className="text-center mb-4 text-xl font-bold">
          Instructional Staff
        </h1>
        <div className="flex flex-wrap">
          {allStaff.length > 0 ? (
            allStaff.map((staff) => <UserCard key={staff.id} user={staff} />)
          ) : (
            <p style={{ textAlign: "center" }}>
              There are no staff registered in the database!
            </p>
          )}
        </div>
        <h1 className="text-center mb-4 mt-8 text-xl font-bold">Students</h1>
        <div className="flex flex-wrap">
          {allStudents.length > 0 ? (
            allStudents.map((student) => (
              <UserCard key={student.id} user={student} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              There are no student registered in the database!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
