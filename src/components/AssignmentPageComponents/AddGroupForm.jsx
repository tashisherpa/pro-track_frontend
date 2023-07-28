import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersThunk } from "../../redux/users/users.action";
import { addGroupThunk } from "../../redux/group/group.action";
import {
  addAssignmentStatusThunk,
  editAssignmentStatusThunk,
} from "../../redux/assignmentStatus/assignmentStatus.action";

function AddGroupForm({assignmentId}) {
  const users = useSelector((state) => state.users.allUsers);
  const createdAssignmentStatus = useSelector((state) => state.assignmentsStatus.createdAssignmentStatus);
  const group = [];
  const [student, setStudent] = useState(0);
  const [newAssignmentStatus, setNewAssignmentStatus] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  let groupId = 1;
  const dispatch = useDispatch();

  const handleCreateAssignment = () => {
    setNewAssignmentStatus({
      userId: 1,
      assignmentId: assignmentId,
      status: false,
      submission: null,
      submissionDate: new Date(),
      feedback: null,
    });
    dispatch(
      addAssignmentStatusThunk({
        userId: 1,
        assignmentId: assignmentId,
        status: false,
        submission: null,
        submissionDate: new Date(),
        feedback: null,
      })
    );
    setIsVisible(false);
  };

  const handleAddStudent = (userId) => {
    const newGroupMember = { userIds: [userId], groupId, assignmentStatusId: createdAssignmentStatus.id, };
    dispatch(addGroupThunk(newGroupMember));
    group.push(newGroupMember);
    groupId = groupId + 1;
    dispatch(editAssignmentStatusThunk({...newAssignmentStatus, userId: userId, id: createdAssignmentStatus.id}));
    console.log("added member: ", newGroupMember);
  };

  const handleChange = (studentId) => {
    setStudent(studentId);
  };

  useEffect(() => {
    const fetchAllUsers = () => {
      return dispatch(fetchAllUsersThunk());
    };
    fetchAllUsers();
  }, [dispatch]);

  const students = users.filter((user) => user.userType === "student");

  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {isVisible && (
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full"
              type="button"
              onClick={handleCreateAssignment}
            >
              Create Assignment
            </button>
          )}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Students
          </label>
          <select
            id="students"
            onChange={(e) => handleChange(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Students...</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full"
            type="button"
            onClick={() => handleAddStudent(student)}
          >
            Add Student
          </button>
          <div className="flex flex-col mt-4">
            <h4>Selected Users:</h4>
            {group
              ? group.map((user) => (
                  <span
                    key={user.id}
                    className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {user.user.firstName} {user.user.lastName}
                  </span>
                ))
              : null}
          </div>
          {/* <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Save
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleCancel}
          >
            Cancel
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default AddGroupForm;
