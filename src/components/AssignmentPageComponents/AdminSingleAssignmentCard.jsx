import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editAssignmentThunk } from "../../redux/assignment/assignments.action";
import { editAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { deleteAssignmentThunk } from "../../redux/assignment/assignments.action";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchSingleAssignmentsStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";
import { fetchAssignmentGroupsThunk } from "../../redux/group/group.action";
import SoloCard from "./SoloCard";
import GroupCard from "./GroupCard";

function AdminSingleAssignmentCard({ assignment }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const assignmentStatus = useSelector(
    (state) => state.assignmentsStatus.singleAssignmentStatus
  );
  const loggedInUser = useSelector((state) => state.users.authUser);
  const assignmentGroups = useSelector((state) => state.group.assignmentGroups);

  const handleDelete = () => {
    dispatch(deleteAssignmentThunk(assignment.id));
    navigate("/assignments");
  };
  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editAssignmentThunk(editForm)).then(() => {
      navigate(`/assignments/${assignmentStatus.assignmentId}`);
    });

    dispatch(
      editAssignmentStatusThunk({
        ...editForm,
        status: !assignmentStatus.status,
      })
    ).then(() => {
      navigate(`/assignments/${assignmentStatus.assignmentId}`);
    });
  };

  useEffect(() => {
    const fetchSingleAssignmentStatus = () => {
      return dispatch(fetchSingleAssignmentsStatusThunk(id));
    };
    fetchSingleAssignmentStatus();
  }, [dispatch]);

  useEffect(() => {
    const fetchAssignmentGroups = () => {
      return dispatch(fetchAssignmentGroupsThunk(assignment.id));
    };
    fetchAssignmentGroups();
  }, [dispatch]);

  console.log("assignment groups: ", assignmentGroups);

  return (
    <div className="max-w-4xl rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="px-6 py-4">
          <div className="flex justify-between w-full font-bold text-3xl text-left mb-2">
            {assignment.assignmentName}
          </div>
          <div className="text-lg text-left mb-2">
            Due: {assignment.due_date}
          </div>
          <div className="text-lg text-left mb-2">
            Instruction: {assignment.instruction}
          </div>
          {/* <div className="text-lg text-left mb-2">
              Group: {assignment.group}
            </div> */}
          <div className="flex justify-evenly flex-wrap w-full font-bold text-3xl text-left mb-2">
            {assignmentGroups.map((assignmentStatus) => {
              const groups = {};

              if(assignmentStatus.groups.length===0){
                console.log("passed to solo card: ", assignmentStatus);
                return <SoloCard key={assignmentStatus.id} user={assignmentStatus}/>
               }
               else{
                assignmentStatus.groups.forEach((groupMember) => {
                  const groupId = groupMember.groupId;

                  if (!groups.hasOwnProperty(groupId)) {
                    groups[groupId] = [];
                  }

                  groups[groupId].push(groupMember);
                });
                console.log("groups array: ", groups);
                return Object.values(groups).map((group) => {
                  console.log("passed group:", group);
                  return <GroupCard key={group[0].id} group={group}/>
                })
               };
            })}
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
  );
}

export default AdminSingleAssignmentCard;
