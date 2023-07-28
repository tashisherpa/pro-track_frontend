import React, {useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addGroupThunk } from '../../redux/group/group.action';
import { fetchSingleAssignmentsStatusThunk } from '../../redux/assignmentStatus/assignmentStatus.action';
import { fetchAssignmentGroupsThunk } from '../../redux/group/group.action';
import { useDispatch } from 'react-redux';

function GroupCard({group, users}) {
    const dispatch = useDispatch();
    const updatedGroup = useSelector((state) => state.group.assignmentGroups);

  const handleAddUserToGroup = (user) => {
    const newGroupMember = { userIds: [user], groupId: group[0].groupId, assignmentStatusId: group[0].assignment_status.id};
    dispatch(addGroupThunk(newGroupMember));
    console.log("added member: ", newGroupMember);
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
    <div className="max-w-md w-80 rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="">
          <div className="flex justify-between w-full font-bold text-3xl text-left mb-2">
            Group {group[0].groupId}
              <div>
                {group[0].assignment_status.status === true ? (
                  <span className="bg-green-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                    Completed
                  </span>
                ) : (
                  <span className="bg-red-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                    Incomplete
                  </span>
                )}
              </div>
          </div>
        </div>
        <div>
            <a href={group[0].assignment_status.submission} target="blank">
            <span className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16" >GitHub Repo Link</span>
            </a>
        </div>
        <div className="mt-4">
          <select
            onChange={(e) => handleAddUserToGroup(e.target.value)}
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">-- Add User to Group Card --</option>
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
        <div className="flex flex-col mt-4">
          <h4>Group Members:</h4>
          {group.map((user) => (
            <span
              key={user.id}
              className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {user.user.firstName}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupCard