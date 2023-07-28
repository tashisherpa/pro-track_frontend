import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import {
  PostAnnouncement,
  DashboardStudentView,
  ZoomInfo,
} from "../components/DashboardPageComponents";
import { fetchAllFeedThunk } from "../redux/feed/feed.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocket } from "../redux/socket/socket.action";

function Dashboard() {
  const user = useSelector((state) => state.users.authUser);
  const allFeed = useSelector((state) => state.feed.allFeed);
  const socket = useSelector((state) => state.socket.socket);

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("FETCH ALL FEED FIRING IN USE EFFECT");

    const fetchAllFeed = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLFEED");
      return dispatch(fetchAllFeedThunk());
    };
    if (socket.on) {
      socket.on("addNewPost", (newFeed) => {
        dispatch(fetchSocket(newFeed));
      });
    }
    fetchAllFeed();
  }, [dispatch, socket]);

  const [sortedFeed, setSortedFeed] = useState([]);

  useEffect(() => {
    const sortedList = [...allFeed].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setSortedFeed(sortedList);
  }, [allFeed]);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 bg-gray-700 h-full h-screen sm:ml-64">
        <h1 className="font-semibold text-white text-3xl">Dashboard</h1>
        <ZoomInfo />
        {
          /*when the showAddAnnoucement is set to true then the PostAnnouncement component will show
            this code will only execute if the user is an admin

            using the logical AND operator
            if the first statement is false the second statement is never checked
            in this case if showAddAnnoucement is false the component never renders
          */
          user.userType === "admin" && <PostAnnouncement user={user} />
        }
        {sortedFeed.length > 0 ? (
          sortedFeed.map((post) => (
            <DashboardStudentView key={post.id} post={post} user={user} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>There are no posts yet!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
