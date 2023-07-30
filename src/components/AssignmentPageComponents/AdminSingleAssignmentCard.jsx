import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteAssignmentThunk,
  editAssignmentThunk,
  fetchSingleAssignmentThunk,
} from "../../redux/assignment/assignments.action";
import { addAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import {
  addGroupThunk,
  fetchAssignmentGroupsThunk,
} from "../../redux/group/group.action";
import SoloCard from "./SoloCard";
import GroupCard from "./GroupCard";
import { fetchAllUsersThunk } from "../../redux/users/users.action";
import AddGroupModel from "./AddGroupModel";
import AssignButtonModal from "./AssignButtonModal";

function AdminSingleAssignmentCard({ assignment }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const assignmentStatus = useSelector(
    (state) => state.assignmentsStatus.singleAssignmentStatus
  );
  const loggedInUser = useSelector((state) => state.users.authUser);
  const assignmentGroups = useSelector((state) => state.group.assignmentGroups);
  const [groups, setGroups] = useState([]);
  const users = useSelector((state) => state.users.allUsers);
  const user = useSelector((state) => state.users.authUser);

  const handleDelete = () => {
    dispatch(deleteAssignmentThunk(assignment.id));
    navigate("/assignments");
  };

  useEffect(() => {
    const fetchSingleAssignment = () => {
      return dispatch(fetchSingleAssignmentThunk(id));
    };
    fetchSingleAssignment();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchSingleAssignmentStatus = () => {
      return dispatch(fetchSingleAssignmentsStatusThunk(id));
    };
    fetchSingleAssignmentStatus();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchAllUsers = () => {
      return dispatch(fetchAllUsersThunk());
    };
    fetchAllUsers();
  }, [dispatch]);

  useEffect(() => {
    const fetchAssignmentGroups = () => {
      return dispatch(fetchAssignmentGroupsThunk(id)).then(() => {
        setIsLoading(false);
      });
    };
    fetchAssignmentGroups();
  }, [dispatch, id]);

  //console.log("assignment assigned: ", assignment);
  console.log("assignment groups: ", assignmentGroups);
  //console.log("assignment: ", assignment.assigned);

  const students = users.filter((user) => user.userType === "student");
  //console.log("students: ", students);

  return (
    <div
      key={assignment.group}
      className="max-w-10xl rounded overflow-hidden  mb-20 mt-4 mr-8"
    >
      <div className="flex-col bg-white mb-20 rounded px-4 py-4">
        <div className="px-6 py-4">
          <div className="flex justify-between w-full text-black font-bold text-3xl text-left mb-2">
            {assignment.assignmentName}
            {assignment.assigned === false ? (
              <div>
                <AssignButtonModal
                  assignment={assignment}
                  students={students}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="text-lg text-black text-left mb-2">
            Due: {assignment.due_date?(format(parseISO(assignment.due_date), "MM-dd-yyyy")):null}
          </div>
          <div className="text-lg text-black text-left mb-2">
            Instruction: {assignment.instruction}
          </div>
          {/* <div className="text-lg text-left mb-2">
              Group: {assignment.group}
            </div> */}
          <div className="flex flex-col w-full font-bold text-3xl text-left mb-2">
            {isLoading ? (
              <p>Loading...</p> // Show loading state while data is being fetched
            ) : (
              <div className="flex flex-wrap justify-evenly">
                {assignmentGroups?.map((assignmentStatus) => {
                  const groups = {};

                  console.log(
                    "assignment status from assGroups: ",
                    assignmentStatus
                  );

                  console.log(
                    "assignment status from assGroups: ",
                    assignmentStatus
                  );

                  if (isLoading) {
                    return <div>Loading...</div>;
                  } else if (assignmentStatus?.groups.length === 0) {
                    console.log("passed to solo card: ", assignmentStatus);
                    return (
                      <SoloCard
                        key={assignmentStatus.id}
                        user={assignmentStatus}
                      />
                    );
                  } else {
                    assignmentStatus?.groups.forEach((groupMember) => {
                      const groupId = groupMember.groupId;

                      if (!groups.hasOwnProperty(groupId)) {
                        groups[groupId] = [];
                      }

                      groups[groupId].push(groupMember);
                    });
                    console.log("groups array: ", groups);
                    return Object.values(groups).map((group) => {
                      console.log("passed group:", group);
                      return (
                        <GroupCard
                          key={group[0].id}
                          group={group}
                          users={students}
                        />
                      );
                    });
                  }
                })}
                {console.log("assignment: ", assignment)}
              </div>
            )}
            <div className="flex flex-col">
              {assignment.group === true ? (
                <div className="flex justify-center align-middle mt-16 mb-8">
                  <AddGroupModel assignment={assignment} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div>
            <Link to={`/assignments/edit/${assignment.id}`}>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                Edit
              </button>
            </Link>
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
              onClick={handleDelete}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSingleAssignmentCard;
