import React, { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import { HelpRequestCard, HelpRequestCardStudentView } from "../components/HelpRequestPageComponents";
function HelpRequests() {
  const [isStudent, setIsStudent] = useState(true);
  return (
    <div>
      <SideNavBar />
      <div className=" p-4 sm:ml-64">
        <h1 className="text-lg font-bold mb-4">HELP REQUEST</h1>
        {isStudent?(<HelpRequestCardStudentView/>):null}
        <HelpRequestCard/>
        <HelpRequestCard/>
        <HelpRequestCard/>
      </div>
    </div>
  );
}

export default HelpRequests;