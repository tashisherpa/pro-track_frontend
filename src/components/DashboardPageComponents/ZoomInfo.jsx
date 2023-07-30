import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchZoomMeetingLinkThunk } from "../../redux/zoom/zoom.action";
import { Link } from "react-router-dom";
import {
  addStudentToAttendanceThunk,
  editStudentAttendanceThunk,
  fetchAttendanceThunk,
} from "../../redux/attendance/attendance.action";

function ZoomInfo() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const zoomMeetingLink = useSelector((state) => state.zoom.zoomMeetingLink);
  const attendances = useSelector((state) => state.attendance.attendances);
  const user = useSelector((state) => state.users.authUser);
  const [currentDay, setCurrentDay] = useState("");

  const handleAttendance = () => {
    if (user.userType === "student") {
      //creating an object to pass in the editAttendanceThunk as the api route
      // uses {userId, day, status} to update the attendance status of a student
      const attendanceStatus = {
        userId: user.id,
        day: currentDay.toLowerCase(), // Converting day to lowercase as per the expected format.
        status: "P", //"P" is for Present
      };
      // Filter the attendance array to check if the user is already present
      const userOnAttendance = !attendances.some(
        (attendance) => attendance.userId === user.id
      );
      console.log("IS User on attendance)", userOnAttendance);
      if (userOnAttendance) {
        dispatch(addStudentToAttendanceThunk({ userId: user.id }));
        dispatch(editStudentAttendanceThunk(attendanceStatus));
      } else {
        dispatch(editStudentAttendanceThunk(attendanceStatus));
      }
    }
  };

  useEffect(() => {
    const fetchZoomMeetingLink = () => {
      return dispatch(fetchZoomMeetingLinkThunk());
    };
    const getCurrentDay = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentDate = new Date();
      const dayIndex = currentDate.getDay();
      return daysOfWeek[dayIndex];
    };
    setCurrentDay(getCurrentDay());
    dispatch(fetchAttendanceThunk());
    fetchZoomMeetingLink();
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:scale-110 rounded-lg text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Zoom Link
        </button>
        <Link to={`/dashboard/zoomlink`}>
          <button
            className="bg-blue-500 hover:scale-110 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Edit Zoom Link
          </button>
        </Link>
      </div>

      <br />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/4 my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Zoom Link</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>
                    Join By{" "}
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                      onClick={handleAttendance}
                    >
                      <a href={zoomMeetingLink.link} target="blank">
                        Zoom Meeting Link
                      </a>
                    </button>
                  </p>
                  <br />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ZoomInfo;
