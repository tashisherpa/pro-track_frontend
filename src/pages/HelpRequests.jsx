import React, { useEffect, useState } from "react";
import SideNavBar from "../components/SideNavBar";
import { HelpRequestCard } from "../components/HelpRequestPageComponents";
import { fetchAllHelpRequestsThunk } from "../redux/helprequest/helprequest.action";
import { fetchAuthUserThunk } from "../redux/users/users.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function HelpRequests() {
  const dispatch = useDispatch();
  const allHelpRequests = useSelector(
    (state) => state.helpRequests.allHelpRequests
  );
  const loggedInUser = useSelector((state) => state.users.authUser);
  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  // Sorting function to compare two help request objects by their created date
  const sortByID = (a, b) => {
    // Sort by status first
    if (a.status !== b.status) {
      // Put "Resolved" status last, and others first
      if (a.status === "Resolved") return 1;
      if (b.status === "Resolved") return -1;
      // Put "In Progress" status before "Pending" status
      if (a.status === "In Progress") return -1;
      if (b.status === "In Progress") return 1;
    }
    // If status is the same, sort by id
    return a.id - b.id;
  };

  // State for sorted help requests
  const [sortedHelpRequests, setSortedHelpRequests] = useState([]);

  // When the allHelpRequests array changes, sort the list
  useEffect(() => {
    const sortedList = [...allHelpRequests].sort(sortByID);
    setSortedHelpRequests(sortedList);
  }, [allHelpRequests]);

  useEffect(() => {
    //console.log("FETCH ALL HELP REQUESTS FIRING IN USE EFFECT");
    const fetchAllHelpRequets = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLHELPREQUEST");
      return dispatch(fetchAllHelpRequestsThunk());
    };
    fetchAllHelpRequets();
  }, [dispatch]);
  return (
    <div>
      <SideNavBar />
      <div className=" p-4 sm:ml-64">
        <h1 className="text-lg font-bold mb-4">HELP REQUEST</h1>
        {/**only allow the student to add request*/}
        {loggedInUser.userType === "student" ? (
          <Link to="/helprequests/addrequest">Add new request</Link>
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
            There are no help request at the moment, enjoy while it lasts TAs
          </p>
        )}
      </div>
    </div>
  );
}

export default HelpRequests;
