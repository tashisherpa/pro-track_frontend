import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editAssignmentThunk } from "../../redux/assignment/assignments.action";
import { addAssignmentStatusThunk } from "../../redux/assignmentStatus/assignmentStatus.action";

function AssignButtonModal({ assignment, students}) {
  const [groupModel, setGroupModel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGroup, setIsGroup] = useState(null);
  const dispatch = useDispatch();

  const handleAssign = () => {
    // Toggle the state variable to show/hide the modal
    setIsModalOpen(!isModalOpen);
  };

  const handleModelAssign = () => {
    console.log("isGroup:", isGroup);

    // Close the modal after performing the assignment
    setIsModalOpen(false);
    dispatch(
      editAssignmentThunk({ ...assignment, group: isGroup, assigned: "true" })
    );
    if(isGroup === false){
        students.map((student) => {
            console.log("students mapping ", student.id);
            dispatch(addAssignmentStatusThunk({
                    userId: student.id,
                    assignmentId: assignment.id,
                    status: false,
                    submission: null,
                    submissionDate: null,
                    feedback: null,
                  }))
          }
        )
    }
  };

  const handleOptionChange = (event) => {
    setIsGroup(event.target.value === "true");
  };
  return (
    <div>
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
        onClick={handleAssign}
      >
        Assign
      </button>

      {isModalOpen && (
        // Your modal component goes here. You can replace this with your own modal implementation.
        // For simplicity, I'll just use a basic example.
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded-lg z-10 w-full max-w-4xl m-8">
            <p className="text-lg">Is this a group or solo assignment?</p>
            <div className="my-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="true"
                  checked={isGroup === true}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Group</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  value="false"
                  checked={isGroup === false}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Solo</span>
              </label>
            </div>
            <div className="flex justify-between w-16 h-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full"
                onClick={handleAssign}
              >
                Close
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full"
                onClick={handleModelAssign}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignButtonModal;
