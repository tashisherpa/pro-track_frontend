import React from "react";
import SideNavBar from "../components/SideNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsersThunk } from "../redux/users/users.action";
import UserCard from "../components/UserPageComponents/UserCard";

function Users() {
  const dispatch = useDispatch();

  //gets the all users array from users store
  const allUsers = useSelector((state) => state.users.allUsers);
  const allStaff = allUsers.filter((user) => user.userType !== "student");
  const allStudents = allUsers.filter((user) => user.userType === "student");
  console.log("allStaff: ", allStaff);
  console.log("allStudents: ", allStudents);

  //gets all users with the fetchAllUsers func
  useEffect(() => {
    console.log("FETCH ALL STUDENTS FIRING IN USE EFFECT");

    //dispatches the fetchAllUsersThunk() from users actions which returns
    //object with the action type and payload containing the array of users
    //and sets all user state to the payload from here through the root-reducer

    const fetchAllUsers = () => {
      console.log("RUNNING DISPATCH FROM FETCHALLSTUDENTS");
      return dispatch(fetchAllUsersThunk());
    };
    fetchAllUsers();
  }, [dispatch]);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
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
