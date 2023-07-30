import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAttendanceThunk,
  fetchAttendanceThunk,
} from "../../redux/attendance/attendance.action";
import AttendanceRow from "./AttendanceRow";
import SideNavBar from "../SideNavBar";

function Attendance() {
  const dispatch = useDispatch();
  const attendance = useSelector((state) => state.attendance.attendances);
  const [sortAttendance, setSortAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowConfirmation = () => {
    setShowModal(true);
  };

  const handleClear = () => {
    dispatch(clearAttendanceThunk());
    setShowModal(false);
  };

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
        <>
          <button
            className="bg-blue-500 hover:scale-110 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            onClick={handleShowConfirmation}
          >
            Clear
          </button>
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
        </>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/4 my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">ARE YOU SURE?</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>
                    Are you sure you want to clear the attendance data? This
                    action cannot be undone and all the attendance records will
                    be permanently removed. Please confirm by selecting 'YES' or
                    'NO'
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClear()}
                  >
                    YES
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Attendance;
