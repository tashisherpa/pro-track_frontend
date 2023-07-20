import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editHelpRequestThunk } from "../../redux/helprequest/helprequest.action";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
/**
 *
 * @returns a card component that displays the help request
 */
function HelpRequestCard({ helpRequest }) {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.users.authUser);
  //state

  const [isAdmin, setIsAdmin] = useState(true);
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

  const cardStyling = `${backgroundColor} rounded-lg overflow-hidden shadow-xl mb-4`;

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  const handleButtonClick = (newStatus) => {
    /**
     * if the status when the button is clicked is waiting,
     * the status changes from waiting to in progress,
     * then the card's background color changes to yellow to show it's in progress
     * also, the button changes from accept to resolved so TA/Admin can click to show the request was resolved
     *
     * else if the status when the button is clicked is in progress,
     * then, the status changes from "In Progress" to "Resolved"
     * changing the card's background color to green to show it's been resolved
     * and the button disappears
     */
    if (status === "Pending") {
      setStatus("In Progress");
      setBackGroundColor("bg-yellow-300");
      setButtonName("Resolved");
    } else if (status === "In Progress") {
      setStatus("Resolved");
      setBackGroundColor("bg-green-300");
    }
  };

  // Use useEffect to dispatch the editHelpRequestThunk whenever the status changes
  useEffect(() => {
    dispatch(
      editHelpRequestThunk({
        ...helpRequest,
        status: status, // Send the updated status in the editHelpRequestThunk
      })
    );
  }, [dispatch, helpRequest, status]);

  return (
    <div className={cardStyling}>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">
          Requested by: {helpRequest.student.firstName}{" "}
          {helpRequest.student.lastName}
        </div>
        <h3 className="text-xs">Status: {status}</h3>
        <p>{helpRequest.request}</p>
      </div>
      {
        /*Only visible to TA/Admins */
        isAdmin ? (
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleButtonClick}
            >
              {buttonName}
            </button>
          </div>
        ) : null
      }
    </div>
  );
}

export default HelpRequestCard;
