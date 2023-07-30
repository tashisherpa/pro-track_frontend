import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addGroupThunk } from "../../redux/group/group.action";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { fetchAssignmentGroupsThunk } from "../../redux/group/group.action";
import { useDispatch } from "react-redux";

function GroupCard({ group, users }) {
  const dispatch = useDispatch();
  const updatedGroup = useSelector((state) => state.group.assignmentGroups);

  const handleAddUserToGroup = (user) => {
    const newGroupMember = {
      userIds: [user],
      groupId: group[0].groupId,
      assignmentStatusId: group[0].assignment_status.id,
    };
    dispatch(addGroupThunk(newGroupMember));
    localStorage.setItem('scrollPosition', window.scrollY);
    window.location.reload();
  };

  //   useEffect(() => {
  //     const fetchAssignmentGroups = () => {
  //       return dispatch(fetchAssignmentGroupsThunk(group[0].assignment_status.id));
  //     };
  //     fetchAssignmentGroups();
  //   }, [dispatch, group[0].assignment_status.id]);

  console.log("passed users: ", users);
  console.log("passed group: ", group);
  console.log("updated group: ", updatedGroup);

  return (
    <div className="max-w-sm bg-white hover:scale-110 text-black rounded-lg overflow-hidden shadow-xl mt-8 mr-12">
      <div className="px-6 py-4">
        <div className="flex text-black justify-between w-full  font-bold text-3xl text-left mb-2">
          Group {group[0].groupId}
          <div className=" text-white ">
            {group[0].assignment_status.status === true ? (
              <span className="bg-green-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                Completed
              </span>
            ) : (
              <span className="bg-red-600 rounded-full   px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                Incomplete
              </span>
            )}
          </div>
        </div>

        <div>
          <a href={group[0].assignment_status.submission} target="blank">
            <span className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16">
              GitHub Repo Link
            </span>
          </a>
        </div>
        <div className="mt-4">
          <select
            onChange={(e) => handleAddUserToGroup(e.target.value)}
            className="block w-40 text-base rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Add User</option>
            {users.map((user) => (
              <option
                key={user.id}
                value={user.id}
                disabled={group.includes(user.firstName)}
              >
                {console.log("user id in selector", user.id)}
                {user.firstName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col text-lg mt-4">
          <h1>Group Members:</h1>
          {group.map((user) => (
            <span
              key={user.id}
              className=" text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {user.user.firstName} {user.user.lastName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
