import React from "react";
import SideNavBar from "../components/SideNavBar";
import { DashboardAdminView, DashboardStudentView } from "../components/DashboardPageComponents";
function Dashboard() {
  return (
    <div>
      <SideNavBar />
      <div class="p-4 sm:ml-64">
        <DashboardAdminView/>
        <DashboardStudentView/>
      </div>
    </div>
  );
}

export default Dashboard;
