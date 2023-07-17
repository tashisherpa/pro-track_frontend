import React from 'react';
import SideNavBar from '../components/SideNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { fetchAllUsersThunk } from '../redux/users/users.action';
import UserCard from '../components/UserPageComponents/UserCard';

function Users() {
  const dispatch = useDispatch();
  //gets the all students array from student reducer
  const allUsers = useSelector((state) => state.users.allUsers);

  //gets all students with the fetchAllstudents func
  useEffect(() => {
    console.log("FETCH ALL STUDENTS FIRING IN USE EFFECT");
    //dispatches the fetchAllStudentsThunk() from student actions which returns
    //object with the action type and payload containing the array of students
    //and sets all students state to the payload from here through the root-reducer
    const fetchAllUsers = () => {
      console.log("RUNNING DISPATCH FROM FETCHALLSTUDENTS");
      return dispatch(fetchAllUsersThunk());
    };
    fetchAllUsers();
  }, [dispatch]);

  const allStaff = allUsers.filter(user => (user.userType==="admin"||user.userType==="TA"));
  const allStudents = allUsers.filter(user => user.userType==="student");
  console.log("allStaff: ", allStaff);
  console.log("allStudents: ", allStudents);

  return (
    <div>
        <SideNavBar />
        <div className="p-4 sm:ml-64">
            <h1 className="text-center mb-4 text-xl font-bold">Instructional Staff</h1>
            <div className="flex flex-wrap">
              {allStaff.length>0 ? allStaff.map(staff =>(
                <UserCard key={staff.id} user={staff}/>
              )) : <p style={{textAlign:"center"}}>There are no users registered in the database!</p>
              }
            </div>
            <h1 className="text-center mb-4 mt-8 text-xl font-bold">Students</h1>
            <div className="flex flex-wrap">
              {allStudents.length>0 ? allStudents.map(student =>(
                <UserCard key={student.id} user={student}/>
              )) : <p style={{textAlign:"center"}}>There are no users registered in the database!</p>
              }
            </div>
        </div>
    </div>
  )
}

export default Users