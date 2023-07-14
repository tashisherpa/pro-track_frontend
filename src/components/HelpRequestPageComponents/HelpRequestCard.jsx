import React, { useState } from "react";

/**
 *
 * @returns a card component that displays the help request
 */
function HelpRequestCard() {
  //state
  const [isAdmin, setIsAdmin] = useState(true);
  const [status, setStatus] = useState("waiting");
  const [buttonName, setButtonName] = useState("Accept");
  const [backgroundColor, setBackGroundColor] = useState("bg-red-300");

  //card styling
  const cardStyling = `${backgroundColor} rounded-lg overflow-hidden shadow-xl mb-4`;

  const handleButtonClick = () => {
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
    if (status === "waiting") {
      setStatus("In Progress");
      setBackGroundColor("bg-yellow-300");
      setButtonName("Resolved");
    } else if (status === "In Progress") {
      setStatus("Resolved");
      setBackGroundColor("bg-green-300");
    }
  };

  return (
    <div className={cardStyling}>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">Issue</div>
        <h3 className="text-xs">Status: {status}</h3>
        <p>
          Hello! can we get help in room 12? We are having issues with
          connecting to the back-end with the Redux files. We tried to do it in
          the way we learned in class but we kept getting errors since the
          imports we were using were deprecated. We are trying to fix it right
          now with the imports VScode recommended but we are not sure if what we
          are doing is working. We are using MacOs and Microsoft. @Instructional
          Staff
        </p>
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
