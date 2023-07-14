import React from "react";
import SideNavBar from "../components/SideNavBar";
import { HelpRequestCard } from "../components/HelpRequestPageComponents";
function HelpRequests() {
  return (
    <div>
      <SideNavBar />
      <div class="p-4 sm:ml-64">
        <HelpRequestCard/>
      </div>
    </div>
  );
}

export default HelpRequests;