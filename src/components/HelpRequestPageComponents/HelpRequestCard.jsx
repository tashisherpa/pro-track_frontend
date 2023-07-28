import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteHelpRequestThunk,
  editHelpRequestThunk,
} from "../../redux/helprequest/helprequest.action";
import { Link } from "react-router-dom";
/**
 *
 * @returns a card component that displays the help request
 */
function HelpRequestCard({ helpRequest, loggedInUser }) {
  const dispatch = useDispatch();
  //state

  const [status, setStatus] = useState(helpRequest.status);
  const [buttonName, setButtonName] = useState(
    helpRequest.status === "Pending" ? "Accept" : "Resolved"
  );
  const [backgroundColor, setBackGroundColor] = useState(
    helpRequest.status === "Pending"
      ? "bg-red-300"
      : helpRequest.status === "In Progress"
      ? "bg-yellow-300"
      : "bg-green-300"
  );

  const cardStyling = `${backgroundColor} rounded-lg hover:scale-90 overflow-hidden shadow-xl mb-4`;

  const handleButtonClick = () => {
    //changes status, backgroundColor and ButtonName based on the helprequest.status
    if (status === "Pending") {
      setStatus("In Progress");
      setBackGroundColor("bg-yellow-300");
      setButtonName("Resolved");
      return dispatch(
        editHelpRequestThunk({
          ...helpRequest,
          status: "In Progress",
          taId: loggedInUser.id, // Send the updated status in the editHelpRequestThunk
        })
      );
    } else if (status === "In Progress") {
      setStatus("Resolved");
      setBackGroundColor("bg-green-300");
      return dispatch(
        editHelpRequestThunk({
          ...helpRequest,
          status: "Resolved",
          taId: loggedInUser.id, // Send the updated status in the editHelpRequestThunk
        })
      );
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    return dispatch(deleteHelpRequestThunk(helpRequest.id));
  };
  return (
    <div className={cardStyling}>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">
          {`Requested by: ${helpRequest.student.firstName}
          ${helpRequest.student.lastName}`}
        </div>
        <h3 className="text-xs">
          {helpRequest.status !== "Resolved"
            ? `Status: ${status}`
            : `Resolved by ${helpRequest.ta.firstName} ${helpRequest.ta.lastName}`}
        </h3>
        <p>{helpRequest.request}</p>
      </div>
      {
        /*Only visible to TA/Admins */
        loggedInUser.userType === "admin" ? (
          <div>
            {status !== "Resolved" ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleButtonClick}
              >
                {buttonName}
              </button>
            ) : null}
          </div>
        ) : loggedInUser.id === helpRequest.student.id &&
          status === "Pending" ? (
          <div>
            <Link to={`/helprequests/editrequest/${helpRequest.id}`}>
              <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">
                Edit
              </button>
            </Link>
            <button
              className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default HelpRequestCard;
