import React, { useEffect } from "react";

import {
  ResourceCard,
  AddResourceBtn,
} from "../components/ResourcesPageComponents";
import SideNavBar from "../components/SideNavBar";
import { fetchAllResourcesThunk } from "../redux/resources/resources.action";
import { useDispatch, useSelector } from "react-redux";
import { deleteSocket, fetchSocket } from "../redux/socket/socket.action";

function Resources() {
  const dispatch = useDispatch();
  const allResources = useSelector((state) => state.resources.allResources);
  const user = useSelector((state) => state.users.authUser);
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    const fetchAllResources = () => {
      return dispatch(fetchAllResourcesThunk());
    };
    if (socket.on) {
      socket.on("addNewResource", (newResource) => {
        dispatch(fetchSocket(newResource));
      });

      socket.on("editResource", (updatedResource) => {
        dispatch(fetchSocket(updatedResource));
      });

      socket.on("deleteResource", (id) => {
        dispatch(deleteSocket(id));
      });
    }
    fetchAllResources();
  }, [dispatch, socket]);

  return (
    <div className = "h-screen bg-gray-700 ">
    <div className="h-full">
      <SideNavBar />
      <div className="p-4  sm:ml-64">
        <h1 className="text-2xl text-white  font-bold mb-4 border-b-2 border-white">
          Resources
        </h1>
        {user.userType !== "student" ? <AddResourceBtn /> : null}
        <div className="flex flex-wrap">
          {allResources.length > 0 ? (
            allResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              NO RESOURCES HAVE BEEN POSTED FOR YOU !
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resources;
