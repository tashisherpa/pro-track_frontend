import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import {
  HelpRequestCard,
  HelpRequestCardStudentView,
} from "../components/HelpRequestPageComponents";
import { fetchAllHelpRequestsThunk } from "../redux/helprequest/helprequest.action";
import { useDispatch, useSelector } from "react-redux";
function HelpRequests() {
  const dispatch = useDispatch();
  const allHelpRequests = useSelector(
    (state) => state.helpRequests.allHelpRequests
  );
  useEffect(() => {
    //console.log("FETCH ALL HELP REQUESTS FIRING IN USE EFFECT");

    const fetchAllHelpRequets = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLHELPREQUEST");
      return dispatch(fetchAllHelpRequestsThunk());
    };
    fetchAllHelpRequets();
  }, [dispatch]);
  //console.log("All Help Requests", allHelpRequests);
  const [isStudent, setIsStudent] = useState(true);
  return (
    <div>
      <SideNavBar />
      <div className=" p-4 sm:ml-64">
        <h1 className="text-lg font-bold mb-4">HELP REQUEST</h1>
        {isStudent ? <HelpRequestCardStudentView /> : null}
        <HelpRequestCard />
        <HelpRequestCard />
        <HelpRequestCard />
      </div>
    </div>
  );
}

export default HelpRequests;
