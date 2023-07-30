import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAttendanceThunk } from "../../redux/attendance/attendance.action";
import AttendanceRow from "./AttendanceRow";
import SideNavBar from "../SideNavBar";

function Attendance() {
  const dispatch = useDispatch();
  const attendance = useSelector((state) => state.attendance.attendances);
  const [sortAttendance, setSortAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAttendanceThunk())
      .then(() => setLoading(false))
      .catch((error) => {
        // Handle error if needed
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    const sortedList = [...attendance].sort((a, b) =>
      a?.user?.firstName?.localeCompare(b?.user?.firstName)
    );
    setSortAttendance(sortedList);
  }, [attendance]);

  return (
    <div className="p-4 bg-gray-700 h-full h-screen sm:ml-64">
      <SideNavBar />
      {loading ? (
        <p>Loading...</p> // Show loading state while data is being fetched
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-5 py-3">First Name</th>
                    <th className="px-5 py-3">Last Name</th>
                    <th className="px-4 py-3">M</th>
                    <th className="px-4 py-3">T</th>
                    <th className="px-4 py-3">W</th>
                    <th className="px-3 py-3">Th</th>
                    <th className="px-4 py-3">F</th>
                    <th className="px-3 py-3">Sa</th>
                    <th className="px-3 py-3">Su</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {console.log("Attendance Before the map:", sortAttendance)}
                  {sortAttendance.map((userAttendance) => {
                    return (
                      <AttendanceRow
                        key={userAttendance.id}
                        userAttendance={userAttendance}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Attendance;
