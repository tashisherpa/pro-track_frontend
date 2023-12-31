import React, { useEffect, useState } from "react";
import SideNavBar from "../components/SideNavBar";
import { HelpRequestCard } from "../components/HelpRequestPageComponents";
import { fetchAllHelpRequestsThunk } from "../redux/helprequest/helprequest.action";
import {
  addSocket,
  deleteSocket,
  fetchSocket,
} from "../redux/socket/socket.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HelpRequests() {
  const dispatch = useDispatch();
  const allHelpRequests = useSelector(
    (state) => state.helpRequests.allHelpRequests
  );
  const loggedInUser = useSelector((state) => state.users.authUser);
  const socket = useSelector((state) => state.socket.socket);

  // State for sorted help requests
  const [sortedHelpRequests, setSortedHelpRequests] = useState([]);

  // When the allHelpRequests array changes, sort the list in lastest request on top
  useEffect(() => {
    const sortedList = [...allHelpRequests].sort((a, b) => b.id - a.id);
    setSortedHelpRequests(sortedList);
  }, [allHelpRequests]);

  useEffect(() => {
    //console.log("FETCH ALL HELP REQUESTS FIRING IN USE EFFECT");
    const fetchAllHelpRequets = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLHELPREQUEST");
      return dispatch(fetchAllHelpRequestsThunk());
    };
    if (socket.on) {
      socket.on("addNewRequest", (newRequest) => {
        dispatch(fetchSocket(newRequest));
      });

      socket.on("editRequest", (updatedRequest) => {
        dispatch(fetchSocket(updatedRequest));
      });

      socket.on("deleteRequest", (id) => {
        dispatch(deleteSocket(id));
      });
    }
    fetchAllHelpRequets();
  }, [socket, dispatch]);
  return (
    <div>
      <SideNavBar />
      <div className=" bg-gray-700">
        <div className=" p-4 sm:ml-64">
          <h1 className="text-lg font-bold text-white mb-4 border-b-2 border-white">
            HELP REQUEST
          </h1>
          <div className="bg-gray-700 ">
            {loggedInUser.userType === "student" ? (
              <Link to="/helprequests/addrequest">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full items-center m-2 py-2 px-4 max-w-fit">
                  Add new request
                </button>
              </Link>
            ) : null}
            {sortedHelpRequests.length > 0 ? (
              sortedHelpRequests.map((helpRequest) => (
                <HelpRequestCard
                  key={helpRequest.id}
                  helpRequest={helpRequest}
                  loggedInUser={loggedInUser}
                />
              ))
            ) : (
              <p className="text-center">
                There are no help request at the moment, enjoy while it lasts
                TAs
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpRequests;
