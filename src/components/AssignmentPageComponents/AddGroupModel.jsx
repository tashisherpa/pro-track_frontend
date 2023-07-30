// import AddGroupForm from "./AddGroupForm";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersThunk } from "../../redux/users/users.action";
import { addGroupThunk } from "../../redux/group/group.action";
import {
  addAssignmentStatusThunk,
  editAssignmentStatusThunk,
} from "../../redux/assignmentStatus/assignmentStatus.action";

function AddGroupModel({ assignment }) {
  const [groupModel, setGroupModel] = useState(false);

  const users = useSelector((state) => state.users.allUsers);
  const createdAssignmentStatus = useSelector(
    (state) => state.assignmentsStatus.createdAssignmentStatus
  );
  const [student, setStudent] = useState(0);
  const [newAssignmentStatus, setNewAssignmentStatus] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [group, setGroup] = useState([]);
  let groupId = 1;
  const dispatch = useDispatch();
  let realid = 0;

  const handleCreateAssignment = () => {
    setNewAssignmentStatus({
      userId: 1,
      assignmentId: assignment.id,
      status: false,
      submission: null,
      submissionDate: new Date(),
      feedback: null,
    });
    dispatch(
      addAssignmentStatusThunk({
        userId: 1,
        assignmentId: assignment.id,
        status: false,
        submission: null,
        submissionDate: new Date(),
        feedback: null,
      })
    );
    setIsVisible(false);
    setDropdownVisible(true);
  };

  const handleAddStudent = (userId) => {
    // const newGroupMember = { userIds: [userId], groupId, assignmentStatusId: createdAssignmentStatus.id, };
    // dispatch(addGroupThunk(newGroupMember));
    setGroup([...group, userId]);
    // console.log("group array: ", group);
    groupId = groupId + 1;
    // dispatch(editAssignmentStatusThunk({...newAssignmentStatus, userId: userId, id: createdAssignmentStatus.id}));
    // console.log("added member: ", newGroupMember);
  };

  const handleChange = (studentId) => {
    setStudent(studentId);
  };

  const realId = (userid) => {
    realid = userid-1;
  }

  const realIdSet = () => {
    realid = 0;
  }

  useEffect(() => {
    const fetchAllUsers = () => {
      return dispatch(fetchAllUsersThunk());
    };
    fetchAllUsers();
  }, [dispatch]);

  const students = users.filter((user) => user.userType === "student");

  const handleAddGroup = () => {
    setGroupModel(!groupModel);
  };

  const handleModelAddGroup = () => {
    setGroupModel(!groupModel);
    const newGroupMember = {
      userIds: group,
      groupId,
      assignmentStatusId: createdAssignmentStatus.id,
    };
    dispatch(addGroupThunk(newGroupMember));
    localStorage.setItem('scrollPosition', window.scrollY);
    window.location.reload();
  };

//   console.log("group array: ", group);
//   console.log("new assignment status: ", createdAssignmentStatus);
//   console.log("student array check: ", students);
//   console.log("users: ", users);

  return (
    <div className="block items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-extrabold py-2 px-4 rounded-full m-2 max-w-md max-h-24"
        onClick={handleAddGroup}
      >
        Add Group
      </button>

      {groupModel ? (
        <div>
          <div className="fixed inset-0 flex items-center justify-center align-middle z-50">
            <div className="bg-black opacity-50 fixed inset-0"></div>
            <div className="bg-white p-8 rounded-lg z-10 w-full max-w-4xl m-8">
              <p className="text-black text-xl mb-4">Create New Group</p>
              {isVisible && (
                <button
                  className=" bg-gray-400 hover:bg-gray-500 text-white text-md font-semibold px-4 rounded-full mt-4 mb-12 h-12 w-100 text-center"
                  type="button"
                  onClick={handleCreateAssignment}
                >
                  Create Assignment
                </button>
              )}
              {dropdownVisible ? (
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-base">
                    Students
                  </label>
                  <select
                    id="students"
                    onChange={(e) => handleChange(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                  >
                    <option selected>Students...</option>
                    {students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student?.firstName} {student?.lastName}
                      </option>
                    ))}
                  </select>
                  <button
                    className=" bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full mb-2"
                    type="button"
                    onClick={() => handleAddStudent(student)}
                  >
                    Add Student
                  </button>
                  <div className="flex flex-col mt-4">
                    <h4 className="text-black text-base font-bold mb-2">Selected Users:</h4>
                    {group?.map((userid) => (
                      <span key={userid} className="text-black text-sm font-normal mb-8">
                        {realId(userid)}
                        {users[realid]?.firstName} {users[realid]?.lastName}
                        {realIdSet()}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="flex justify-start align-middle w-56 h-10">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-extrabold py-2 px-4 rounded-full max-w-lg mr-4"
                  onClick={() => {setGroupModel(false)}} // Fix: Wrap in arrow function
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-extrabold py-2 px-4 rounded-full w-fit"
                  onClick={handleModelAddGroup}
                >
                  Add Group
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AddGroupModel;
