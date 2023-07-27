import React, { useEffect } from "react";

import {
  ResourceCard,
  AddResourceBtn,
} from "../components/ResourcesPageComponents";
import SideNavBar from "../components/SideNavBar";
import { fetchAllResourcesThunk } from "../redux/resources/resources.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocket } from "../redux/socket/socket.action";

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
    }
    fetchAllResources();
  }, [dispatch, socket]);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Resources</h1>
        {user.userType !== "student" ? <AddResourceBtn /> : null}
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
