import React from "react";
import AddResourceBtn from "../components/ResourcesPageComponents/AddResourceBtn";
import ResourceCard from "../components/ResourcesPageComponents/ResourceCard";
import SideNavBar from "../components/SideNavBar";

function Resources() {
  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Resources</h1>
        <AddResourceBtn />
        <ResourceCard />
      </div>
    </div>
  );
}

export default Resources;
