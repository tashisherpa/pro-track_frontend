import React from "react";
import SideNavBar from "../components/SideNavBar";
import { HelpRequestCard, HelpRequestCardStudentView } from "../components/HelpRequestPageComponents";
function HelpRequests() {
  return (
    <div>
      <SideNavBar />
      <div class=" p-4 sm:ml-64">
        <h1 className="text-lg font-bold mb-4">HELP REQUEST</h1>
        <HelpRequestCardStudentView/>
        <HelpRequestCard/>
        <HelpRequestCard/>
        <HelpRequestCard/>
      </div>
    </div>
  );
}

export default HelpRequests;