import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import {
  PostAnnouncement,
  DashboardStudentView,
  ZoomInfo,
} from "../components/DashboardPageComponents";
import { fetchAllFeedThunk } from "../redux/feed/feed.action";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {

  //states
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);

  const dispatch = useDispatch();
  const allFeed = useSelector((state) => state.feed.allFeed);

  useEffect(() => {
    //console.log("FETCH ALL FEED FIRING IN USE EFFECT");

    const fetchAllFeed = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLFEED");
      return dispatch(fetchAllFeedThunk());
    };
    fetchAllFeed();
  }, [dispatch]);
  //console.log("All Feed", allFeed);

  const handleAddAnouncement = () => {
    setShowAddAnnouncement(true);
  };

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <ZoomInfo />
        {
          /**If the user is not admin they wont be able to se the Add Announcement button
           * which allows them to add new annoucements that will be shown in the
           * dashboard
           */
          isAdmin ? (
            <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleAddAnouncement}>Add Announcement</button>
          ) : (null
          )
        }
        {
          /*when the showAddAnnoucement is set to true then the PostAnnouncement component will show
            this code will only execute if the user is an admin

            using the logical AND operator
            if the first statement is false the second statement is never checked
            in this case if showAddAnnoucement is false the component never renders
          */
          showAddAnnouncement && <PostAnnouncement />
        }

        <DashboardStudentView />
      </div>
    </div>
  );
}

export default Dashboard;