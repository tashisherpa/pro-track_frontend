import React, { useEffect } from "react";
import AddResourceBtn from "../components/ResourcesPageComponents/AddResourceBtn";
import ResourceCard from "../components/ResourcesPageComponents/ResourceCard";
import SideNavBar from "../components/SideNavBar";
import { fetchAllResourcesThunk } from "../redux/resources/resources.action";
import { useDispatch, useSelector } from "react-redux";

function Resources() {
  const dispatch = useDispatch();
  const allResources = useSelector((state) => state.resources.allResources);
  useEffect(() => {
    const fetchAllResources = () => {
      return dispatch(fetchAllResourcesThunk());
    };
    fetchAllResources();
  }, [dispatch]);
  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Resources</h1>
        <AddResourceBtn />
        <div className="flex flex-wrap">
          {allResources.length > 0 ? (
            allResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>NO LECTURES FOR YOU !</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resources;
